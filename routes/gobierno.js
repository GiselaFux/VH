var express = require('express');
var router = express.Router();

const gobiernoController= require('../controllers/gobiernoController.js')
const path= require('path');
/* GET home page. */
router.get("/", gobiernoController.principal)

module.exports = router;