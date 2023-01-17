const { setWorldConstructor } = require('@cucumber/cucumber')
require('dotenv').config()

class World {
  /**
   * Instantiate the object
   * @param {JSON} attach - attach anything
   * @param {Command} parameters - sets the parameters as command
   */
  constructor ({ attach, parameters }) {
    this.attach = attach // attaching screenshots to report
    this.parameters = parameters
  }
}

setWorldConstructor(World)
