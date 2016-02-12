"use strict";

class RouteObject {
  constructor(type, route, functionName, allowedPermissions) {
    this.type = type;
    this.route = route;
    this.functionName = functionName;
    this.permissions = allowedPermissions || [];
  }
}

module.exports = RouteObject;