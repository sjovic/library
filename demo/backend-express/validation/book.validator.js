const { check, body } = require('express-validator/check');

exports.validateBook = (method) => {
    switch (method) {
        case 'createBook': {
            return [

                check('isbn', "ISBN missing or do not contains 13 characters").exists().isByteLength( {min:13, max: 13}),
                check('author', 'Author missing').exists(),
                check('title', 'Title missing').exists(),
                check('publish_date', 'Publish date missing').exists().isISO8601(),
                check('category_id', 'Category missing').exists()
            ]
        }
    }
}