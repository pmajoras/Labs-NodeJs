"user strict"

function setup(app, controllers) {
  app.get('/api', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  app.get('/api/bear', controllers.bear.getBear);
}

exports.setup = setup;