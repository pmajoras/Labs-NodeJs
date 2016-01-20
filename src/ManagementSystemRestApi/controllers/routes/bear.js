"use strict"

class BearController {
  constructor() {
  }
  
  /**
   * Get the bears.
   */
  getBear(req, res) {
    res.json({ message: 'hooray! welcome to our apiBear222!' });
  }
}

module.exports = BearController;