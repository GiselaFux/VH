var express = require('express');
var router = express.Router();

const autoridadesController= require('../controllers/autoridadesController')
const path= require('path');
/* GET home page. */
router.get("/", autoridadesController.autoridad);
module.exports= router;