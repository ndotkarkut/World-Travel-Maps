// Some libraries to get the job done
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

// Inits the App that is ther server
var app = express();

// "engine" is the viewing engine
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Logs requests and errors onto the console
app.use(logger('dev'));
// We can use JSON to send and receive data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Allows us to send cookies and not have to worry about parsing them, can just access them as json
app.use(cookieParser());
// Allows us to access files in the public directory without relative pathnames
app.use(express.static(path.join(__dirname, 'public')));






// we are using the index router file which we have written in the routes folder
// routes/index.js
app.use('/', indexRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
