
var express = require('express');
var router = express.Router();
var BooksRoute = require('../controllers/bookController.js');

// middleware that is specific to this router
/*router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});*/


/* GET all books. */
router.get('/', async (req, res, next) => {
   try {
        await BooksRoute.list_all_books(req, res);
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* GET book by id. */
router.get('/:id', async (req, res, next) => {
    try {
        await BooksRoute.get_book_by_id(req, res);
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* POST create book. */
router.post('/', async (req, res, next) => {
    try {
        await BooksRoute.create_a_book(req, res);
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* PUT update book. */
router.put('/', async (req, res, next) => {
    try {
        await BooksRoute.update_a_book(req, res);
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

/* DELETE book. */
router.delete('/:id', async (req, res, next) => {
    try {
        await BooksRoute.delete_a_book(req, res);
    } catch(err) {
        console.log("Error router books");
        return next(err);
    }
});

module.exports = router;