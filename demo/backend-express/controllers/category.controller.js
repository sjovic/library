var express = require('express');
var router = express.Router();

var categoryService = require('../service/category.service');
var validate = require('../validation/category.validator');

const { validationResult } = require('express-validator/check');

/* GET all categories. */
router.get('/', async (req, res, next) => {
    try {
        await categoryService.getAllCategories(function(err, categories) {
            if (err) res.status(400).send(err);
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
            if (err) res.status(400).send(err);
            if(category) {
                res.send(category);
            } else {
                res.status(404).send({errors:'Not found'});
            }
        });
    } catch(err) {
        console.log("Error router get by id category");
        return next(err);
    }
});

/* POST create category. */
router.post('/', validate.validateCategory('createCategory'), async (req, res, next) => {
    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var new_category = req.body;

        if(new_category.id){
            await categoryService.getCategoryById(new_category.id, function(err, category) {
                if (category) res.status(400).send({errors:'Category with these id already exists'});
                return;
            });
        }

        await categoryService.createCategory(new_category, function(err, category) {
            if (err) res.status(400).send(err);
            res.json(category);
        });
    } catch(err) {
        console.log("Error router create category");
        return next(err);
    }
});

/* PUT update category. */
router.put('/', async (req, res, next) => {
    try {
        if(req.body.id) {
            await categoryService.getCategoryById(req.body.id, function(err, category) {
                if (category) {
                    categoryService.updateCategory(req.body, function (err, category) {
                        if (err) res.status(400).send(err);
                        res.status(200).json(category);
                    });
                } else {
                    res.status(404).json({ message: 'Category does not exist' });
                    return;
                }
            });
        } else {
            res.status(400).json({ message: 'Category id missing' });
            return;
        }
    } catch(err) {
        console.log("Error router update category");
        return next(err);
    }
});


/* DELETE category. */
router.delete('/:id', async (req, res, next) => {
    try {
        await categoryService.getCategoryById(req.params.id, function(err, category) {
            if(category){
                categoryService.removeCategory(req.params.id, function(err, category) {
                    if (err) res.status(400).send(err);
                    res.status(200).json({ message: 'Category successfully deleted' });
                });
            } else {
                res.status(404).json({ message: 'Category does not exist' });
                return;
            }
        })
    } catch(err) {
        console.log("Error router delete category");
        return next(err);
    }
});

module.exports = router;