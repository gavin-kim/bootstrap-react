"use strict";

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

let router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = router;