var Book = require('../models/book.js');

getBookById = function (bookId, result) {
    Book.findOne({where: {id: bookId}}).then(data => {
        result(null, data);
    });
}

getAllBooks = function(result) {
    Book.findAll().then( data => {
        result(null, data);
    })
}

createBook = function (newBook, result) {
    Book.create(newBook).then(data => {
        result(null, data);
    })
};

updateBook = function(book, result){
    Book.update(book, {where: {id:book.id}}).then(data => {
        result(null, data);
    })
};

removeBook = function(id, result){
    Book.destroy({where: {id:id}}).then(data => {
        result(null, data);
    })
}

module.exports = {
    getBookById,
    getAllBooks,
    createBook,
    updateBook,
    removeBook
};