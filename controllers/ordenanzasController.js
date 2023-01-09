const path = require('path');
const fs = require("fs");


ordenanzasController={
    list:(req,res)=>{
      res.render('ordenanzas');
     }

}
module.exports= ordenanzasController;