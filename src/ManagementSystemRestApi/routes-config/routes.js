"use strict";

function setup(app, controllers) {
  app.get('/api', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  app.get('/api/tasks', function (req, res) {
    var taskController = new controllers.TaskController();
    taskController.getTasks(req, res);
  });
  
  app.post('/api/tasks', function (req, res) {
    var taskController = new controllers.TaskController();
    taskController.insertTask(req, res);
  });
}

exports.setup = setup;