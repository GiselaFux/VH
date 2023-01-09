var express = require('express');
var router = express.Router();

const infoMapaController= require('../controllers/infoMapaController.js')
const path= require('path');
/* GET home page. */
router.get("/",infoMapaController.mapa)

module.exports = router;