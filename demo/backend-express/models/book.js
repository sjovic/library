'user strict';
var sequelize = require('../db/db.js');
const Sequelize = require('sequelize');

var Category = require('./category');

const Model = Sequelize.Model;
class Book extends Model {}
Book.init({
    // attributes
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publish_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: Category,

            // This is the column name of the referenced model
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'book',
    timestamps: false,
    freezeTableName: true
});

module.exports= Book;