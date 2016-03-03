"use strict";
/* jshint ignore:start */
module.exports = {

  errorHandler: function errorHandler(err, req, res, next) {

    if (err.type === "Application") {
      res.status(err.statusCode);

      switch (err.statusCode) {
        case 401:
          res.json({ error: 'Você não está autenticado.' });
          break;
        case 403:
          res.json({ error: 'Acesso negado.' });
        default:
          res.json({ error: 'Something failed!' });
          break;
      }
    }
    else {
      res.status(500);
      res.json({ error: 'Something failed!' });
    }
    res.end();
  },
  errorLogHandler: function logErrors(err, req, res, next) {
    console.error("err.stack", err.stack);
    next(err);
  }
}; 
/* jshint ignore:end */