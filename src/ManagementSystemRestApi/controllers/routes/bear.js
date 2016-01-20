"use strict"

class BearController {
  constructor() {
  }
  
  getBear(req, res){
     res.json({ message: 'hooray! welcome to our apiBear!' }); 
  }
  testeBear(){
       console.log("Inicialize testBear");
  }
}

module.exports = BearController;