const { By } = require('selenium-webdriver')
const { expect } = require('chai')
require('dotenv').config()

module.exports = class KayakPage {
  constructor (driver) {
    this.driver = driver
  }

  // --------------------
  // Page Locators
  // --------------------

  elements = {
    // Elements for kayak.com
    exampleElement: By.xpath('xpathGoesHere')
  }

  // --------------------
  // Methods
  // --------------------

  /**
   * Example method
   */
  async doSomething () {
    await this.driver.findElement(this.elements.exampleElement).click()
  }
}
