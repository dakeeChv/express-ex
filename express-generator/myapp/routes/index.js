var express = require('express');
var router = express.Router();
let { indexView } = require('../controller/indexController')

/* GET home page. */
router.get('/index', indexView);

module.exports = router;
