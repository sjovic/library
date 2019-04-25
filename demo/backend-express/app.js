var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const expressValidator = require('express-validator')

var index = require('./controllers');
var bookController = require('./controllers/book.controller');
var categoryController = require('./controllers/category.controller');

var app = express();


app.use(expressValidator())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'keyboard cat' }));
app.use(cors());

app.use('/', index);
app.use('/books', bookController);
app.use('/categories', categoryController);

module.exports = app;
