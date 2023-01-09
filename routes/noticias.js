var express = require('express');
var router = express.Router();

const noticiasController= require('../controllers/noticiasController.js')
const path= require('path');
/* GET home page. */
router.get("/", noticiasController.news)

module.exports = router;