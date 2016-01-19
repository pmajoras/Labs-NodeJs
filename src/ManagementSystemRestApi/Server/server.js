
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var BearHandler = require('../Handlers/BearHandler');
var routes = require('../Routes/routes');

app.get('/api', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// TODO
// Use the Handlers Classes
var handlers = {
  bear: {
    getBear: function (req, res) {
      res.json({ message: 'hooray! welcome to our apiBear!' });
    },
  }
};

start => {
  console.log("Start function");
  app.use(bodyParser());
  app.use(bodyParser.json());  
  routes.setup(app, handlers);
  
  var port = process.env.PORT || 8080;
  app.listen(port);
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
}
// *******************************************************
exports.start = start;
exports.app = app;