const path = require('path');
const fs = require("fs");


gobiernoController={
    principal:(req,res)=>{
      res.render('gobierno');
     }

}
module.exports= gobiernoController;