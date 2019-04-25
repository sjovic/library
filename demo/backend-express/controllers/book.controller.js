var express = require('express');
var router = express.Router();

var bookService = require('../service/book.service');
var validate = require('../validation/book.validator');

const { validationResult } = require('express-validator/check');

/* GET all books. */
router.get('/', async (req, res, next) => {
   try {
        await bookService.getAllBooks(function(err, book) {
            if (err) res.send(err);
            res.send(book);
        });
    } catch(err) {
        console.log("Error router get all books");
        return next(err);
    }
});

/* GET book by id. */
router.get('/:id', async (req, res, next) => {
    try {
        await bookService.getBookById(req.params.id, function(err, book) {
            if (err) res.send(err);
            if(book) {
                res.send(book);
            } else {
                res.status(404).send({errors:'Not found'});
            }
        });
    } catch(err) {
        console.log("Error router get book by id");
        return next(err);
    }
});

/* POST create book. */
router.post('/', validate.validateBook('createBook'), async (req, res, next) => {
    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var new_book = req.body;

        if(new_book.id) {
            await bookService.getBookById(new_book.id, function(err, book) {
                if (book) res.status(400).send({errors:'Book with these id already exist'});
                return;
            });
        }

        await bookService.createBook(new_book, function(err, book) {
            if (err) res.send(err);
            res.json(book);
        });
    } catch(err) {
        console.log("Error router create new book");
        return next(err);
    }
});

/* PUT update book. */
router.put('/', async (req, res, next) => {
    try {
        if(req.body.id){
            await bookService.getBookById(req.body.id, function(err, book) {
                if (book) {
                    bookService.updateBook(req.body, function(err, book) {
                        if (err) res.send(err);
                        res.json(book);
                    });
                } else {
                    res.status(404).json({ message: 'Book does not exist' });
                    return;
                }
            });
        } else {
            res.status(400).json({ message: 'Book id missing' });
            return;
        }
    } catch(err) {
        console.log("Error router update book");
        return next(err);
    }
});


/* DELETE book. */
router.delete('/:id', async (req, res, next) => {
    try {
        await bookService.getBookById(req.params.id, function(err, book) {
            if (book) {
                bookService.removeBook( req.params.id, function(err, book) {
                    if (err) res.send(err);
                    res.status(200).json({ message: 'Book successfully deleted' });
                });
            } else {
                res.status(404).json({ message: 'Book does not exist' });
                return;
            }
        });
    } catch(err) {
        console.log("Error router delete book");
        return next(err);
    }
});

module.exports = router;