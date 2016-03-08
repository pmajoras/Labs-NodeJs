"use strict";

var config = {};

// JWT secret configuration
config.secret = "testSecret";

// Web Configurations
config.web = {};
config.web.port = process.env.PORT || 8080;

// Log
config.logs = {};

// Database Configurations
config.db = {};
config.db.connectionString = 'mongodb://localhost/ManagementSystem';

module.exports = config;