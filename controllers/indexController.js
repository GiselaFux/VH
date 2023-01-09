const path = require('path');
const fs = require("fs");

indexController={
    index:(req,res,next)=>{
      res.render('index');
     
    }
  

}
module.exports= indexController;