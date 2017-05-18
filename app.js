const express = require('express'),
    path = require('path'),
    index = require('./routes/index'),
    app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static serving css|javascript|images
app.use(express.static(path.join(__dirname, 'public')));

// Set index routing
app.use('/', index);

// Route not match
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Handle error
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error');
});

// App app as module - used in /bin/www
module.exports = app;
