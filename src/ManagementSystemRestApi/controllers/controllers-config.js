"user strict"
var BearController = require("./routes/bear");

var controllers = {
  bear: new BearController()
};

module.exports = controllers;