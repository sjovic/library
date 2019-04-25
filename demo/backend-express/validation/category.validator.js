const { check, body } = require('express-validator/check');

exports.validateCategory = (method) => {
    switch (method) {
        case 'createCategory': {
            return [
                check('name', "Name is missing").exists(),
            ]
        }
    }
}