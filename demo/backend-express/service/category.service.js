var Category = require('../models/category.js');

getCategoryById = function (categoryId, result) {
    Category.findOne({where: {id: categoryId}}).then(data => {
        result(null, data);
    });
}

getAllCategories = function(result) {
    Category.findAll().then( data => {
        result(null, data);
    })
}

createCategory = function (newCategory, result) {
    Category.create(newCategory).then(data => {
        result(null, data);
    })
};

updateCategory = function(category, result){
    Category.update(category, {where: {id:category.id}}).then(data => {
        result(null, data);
    })
};

removeCategory = function(id, result){
    Category.destroy({where: {id:id}}).then(data => {
        result(null, data);
    })
}

module.exports = {
    getCategoryById,
    getAllCategories,
    createCategory,
    updateCategory,
    removeCategory
};