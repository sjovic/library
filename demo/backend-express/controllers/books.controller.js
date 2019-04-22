var express = require('express');
var router = express.Router();

var Book = require('../models/book.js');

/* GET all books. */
router.get('/', async (req, res, next) => {
   try {
        await Book.getAllBooks(function(err, book) {
            if (err) res.send(err);
            res.send(book);
        });
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* GET book by id. */
router.get('/:id', async (req, res, next) => {
    try {
        await Book.getBookById(req.params.id, function(err, book) {
            if (err) res.send(err);
            res.send(book);
        });
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* POST create book. */
router.post('/', async (req, res, next) => {
    try {
        var new_book = new Book(req.body);
        //handles null error
        if(!new_book.isbn && !new_book.author && !new_book.title && !new_book.category_id){
            res.status(400).send({ error:true, message: 'Please provide book' });
        }
        else{
            await Book.createBook(new_book, function(err, book) {
                if (err) res.send(err);
                res.json(book);
            });
        }
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* PUT update book. */
router.put('/', async (req, res, next) => {
    try {
        await Book.updateBook(new Book(req.body), function(err, book) {
            if (err)
                res.send(err);
            res.json(book);
        });
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* DELETE book. */
router.delete('/:id', async (req, res, next) => {
    try {
        await Book.remove( req.params.id, function(err, book) {
            if (err)
                res.send(err);
            res.json({ message: 'Book successfully deleted' });
        });
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

module.exports = router;