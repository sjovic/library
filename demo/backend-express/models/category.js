var sequelize = require('../db/db.js');
const Sequelize = require('sequelize');

const Model = Sequelize.Model;
class Category extends Model {}
Category.init({
    // attributes
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'category',
    timestamps: false,
    freezeTableName: true
    // options
})

module.exports = Category;