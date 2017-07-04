"use strict";
let express = require('express');
let path = require('path');
let router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});
module.exports = router;
//# sourceMappingURL=index.js.map