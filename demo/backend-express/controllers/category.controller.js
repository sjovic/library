var express = require('express');
var router = express.Router();

var categoryService = require('../service/category.service');

/* GET all categories. */
router.get('/', async (req, res, next) => {
    try {
        await categoryService.getAllCategories(function(err, categories) {
            if (err) res.send(err);
            res.send(categories);
        });
    } catch(err) {
        console.log("Error router get all categories");
        return next(err);
    }
});

/* GET category by id. */
router.get('/:id', async (req, res, next) => {
    try {
        await categoryService.getCategoryById(req.params.id, function(err, category) {
            if (err) res.send(err);
            res.send(category);
        });
    } catch(err) {
        console.log("Error router get by id category");
        return next(err);
    }
});

/* POST create category. */
router.post('/', async (req, res, next) => {
    try {
        var new_category = req.body;

        if(new_category.id){
            await categoryService.getCategoryById(new_category.id, function(err, category) {
                if (category) res.send('Category with these id already exist');
                return;
            });
        }
        //handles null error
        if(!new_category.name){
            res.status(400).send({ error:true, message: 'Please provide category' });
        } else {
            await categoryService.createCategory(new_category, function(err, category) {
                if (err) res.send(err);
                res.json(category);
            });
        }
    } catch(err) {
        console.log("Error router create category");
        return next(err);
    }
});

/* PUT update category. */
router.put('/', async (req, res, next) => {
    try {
        await categoryService.updateCategory(req.body, function(err, category) {
            if (err) res.send(err);
            res.json(category);
        });
    } catch(err) {
        console.log("Error router update category");
        return next(err);
    }
});


/* DELETE category. */
router.delete('/:id', async (req, res, next) => {
    try {
        await categoryService.removeCategory( req.params.id, function(err, category) {
            if (err) res.send(err);
            res.json({ message: 'Book successfully deleted' });
        });
    } catch(err) {
        console.log("Error router delete book");
        return next(err);
    }
});

module.exports = router;