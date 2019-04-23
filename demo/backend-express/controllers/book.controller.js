var express = require('express');
var router = express.Router();

var bookService = require('../service/book.service');

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
                res.status(404).send('Not found');
            }
        });
    } catch(err) {
        console.log("Error router get book by id");
        return next(err);
    }
});

/* POST create book. */
router.post('/', async (req, res, next) => {
    try {
        var new_book = req.body;

        //handles null error
        if(!new_book.isbn && !new_book.author && !new_book.title && !new_book.category_id) {
            res.status(400).send({ error:true, message: 'Please provide book' });
            return;
        } if(new_book.id) {
            await bookService.getBookById(new_book.id, function(err, book) {
                if (book) res.status(400).send('Book with these id already exist');
                return;
            });
        } if(new_book.isbn.length != 13) {
            res.status(400).send('ISBN must contains 13 characters ');
            return;
        } else {
            await bookService.createBook(new_book, function(err, book) {
                if (err) res.send(err);
                res.json(book);
            });
        }
    } catch(err) {
        console.log("Error router create new book");
        return next(err);
    }
});

/* PUT update book. */
router.put('/', async (req, res, next) => {
    try {
        await bookService.updateBook(req.body, function(err, book) {
            if (err) res.send(err);
            res.json(book);
        });
    } catch(err) {
        console.log("Error router update book");
        return next(err);
    }
});


/* DELETE book. */
router.delete('/:id', async (req, res, next) => {
    try {
        await bookService.removeBook( req.params.id, function(err, book) {
            if (err) res.send(err);
            res.status(200).json({ message: 'Book successfully deleted' });
        });
    } catch(err) {
        console.log("Error router delete book");
        return next(err);
    }
});

module.exports = router;