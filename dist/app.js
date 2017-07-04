"use strict";
let express = require('express');
let path = require('path');
let index = require('./controllers/index');
let app = express();
// view engine setup
app.set('views', './views');
app.use('/', index);
app.use(express.static(path.join(__dirname, 'public'))); // public resources
app.all('/secret', function (req, res, next) {
    console.log("Accessing the secret section");
    next(); // handler
});
module.exports = app;
//# sourceMappingURL=app.js.map