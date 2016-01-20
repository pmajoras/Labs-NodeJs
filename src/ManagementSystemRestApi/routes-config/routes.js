"user strict"
function setup(app, handlers) {
    app.get('/api', function (req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
    });
    
	app.get('/api/bear', handlers.bear.getBear);
}

exports.setup = setup;