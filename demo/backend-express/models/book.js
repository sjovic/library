'user strict';
var sql = require('../db/db.js');

var Book = function(book) {
    this.id = book.id;
    this.author = book.author;
    this.category_id = book.category_id;
    this.isbn = book.isbn;
    this.publish_date = new Date(book.publish_date);
    this.title = book.title;
}

Book.createBook = function (newBook, result) {
    sql.query("INSERT INTO book set ?", newBook, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res);
        }
    });
};

Book.getBookById = function (bookId, result) {
    sql.query("Select book.id, book.title, book.author, book.isbn, book.category_id, book.publish_date from book where id = ? ", bookId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Book.getAllBooks = function (result) {
    sql.query("Select * from book", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Book.updateBook = function(book, result){
    sql.query("UPDATE book SET ? WHERE id = ?", [book, book.id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Book.remove = function(id, result){
    sql.query("DELETE FROM book WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Book;