var express = require('express');
var router = express.Router();

const ordenanzasController= require('../controllers/ordenanzasController.js')
const path= require('path');
/* GET home page. */
router.get("/", ordenanzasController.list)

module.exports = router;