"use strict";

var config = {};

// JWT secret configuration
config.secret = "testSecret";

// Web Configurations
config.web = {};
config.web.port = process.env.PORT || 8080;

// Database Configurations
config.db = {};
config.db.connectionString = 'mongodb://localhost/ManagementSystem';

module.exports = config;