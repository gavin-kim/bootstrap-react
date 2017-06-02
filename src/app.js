"use strict";

import express from 'express';
import path from 'path';
import index from './controllers/index';

let app = express();

// view engine setup
app.set('views', './views');

app.use('/', index);
app.use(express.static(path.join(__dirname, 'public'))); // public resources


app.all('/secret', function(req, res, next) {
   console.log("Accessing the secret section");
   next(); // handler
});

module.exports = app;