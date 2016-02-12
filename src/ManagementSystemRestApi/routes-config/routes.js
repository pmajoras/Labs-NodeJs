"use strict";

/**
 * 
 */
function setup(app, controllers) {

  // Iterate the controllers configuration
  controllers.forEach(function (controllerConfig) {

    // Iterate trough the configurated methods
    controllerConfig.methods.forEach(function (routeObject) {

      // Apply the route to the specific type using the defined controller and call the functionName
      app[routeObject.type](routeObject.route, function (req, res, next) {
        var controller = new controllerConfig.Controller(routeObject.permissions);
        var permissions = req.currentUser ? req.currentUser.permissions : [];

        if (controller.isAllowed(permissions)) {
          controller[routeObject.functionName](req, res, next);
        }
        else {
          if (req.currentUser) {
            res.status(403).json({ message: 'You dont have access to this method.' });
          }
          else {
            res.status(401).json({ message: 'The user is not authenticated.' });
          }
        }
      });
    });
  });
}

exports.setup = setup;