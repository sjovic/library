'use strict';

var Book = require('../models/book.js');

exports.list_all_books = function(req, res) {
    Book.getAllBooks(function(err, book) {
        if (err)
            res.send(err);
        res.send(book);
    });
};

exports.create_a_book = function(req, res) {
    var new_book = new Book(req.body);
    //handles null error
    if(!new_book || Object.keys(new_book).length == 0){
        res.status(400).send({ error:true, message: 'Please provide book' });
    }
    else{
        Book.createBook(new_book, function(err, book) {
            if (err)
                res.send(err);
            res.json(book);
        });
    }
};

exports.get_book_by_id = function(req, res) {
    Book.getBookById(req.params.id, function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
};

exports.update_a_book = function(req, res) {
    Book.updateBook(new Book(req.body), function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
};


exports.delete_a_book = function(req, res) {
    Book.remove( req.params.id, function(err, book) {
        if (err)
            res.send(err);
        res.json({ message: 'Book successfully deleted' });
    });
};