const path = require('path');
const fs = require("fs");


noticiasController={
    news:(req,res)=>{
      res.render('noticias');
     }

}
module.exports= noticiasController;