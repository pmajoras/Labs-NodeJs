"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = require('task');

// set up a mongoose model
module.exports = mongoose.model('TaskList', new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  board: { type: Schema.Types.ObjectId, ref: 'Board' },
  tasks: [taskSchema]
}));