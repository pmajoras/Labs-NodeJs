"use strict";

class TaskController {
  constructor() {
  }
  
  /**
   * Get the tasks.
   */
  getTasks(req, res) {
    res.json({ message: 'hooray! welcome to our Tasks!' });
  }
  /**
   * Insert a new task
   */
  insertTask() {
    
  }
}

module.exports = TaskController;