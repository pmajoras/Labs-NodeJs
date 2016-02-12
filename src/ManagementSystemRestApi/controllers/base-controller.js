"use strict";

class BaseController {
  constructor(allowedPermissions) {
    this.allowedPermissions = allowedPermissions || [];
  }
  
  /**
   * Get the tasks.
   */
  isAllowed(permissions) {
    permissions = permissions || [];
    return this.allowedPermissions.length === 0 || this.allowedPermissions.some(elem => permissions.indexOf(elem) >= 0);
  }
}
module.exports = BaseController;