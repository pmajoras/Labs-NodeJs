function setup(app, handlers) {
	app.get('/api/bear', handlers.bear.getBear);
}

exports.setup = setup;