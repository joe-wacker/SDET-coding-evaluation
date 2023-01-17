/* eslint-disable no-case-declarations */
const { Builder } = require('selenium-webdriver')
const { FileDetector } = require('selenium-webdriver/remote')
const { getHost, getBrowser, getLocalCapabilities } = require('../config/selenium')

module.exports = class DriverFactory {
  /**
   * This private function configures the web driver to work
   * locally or on saucelabs
   * @returns a Builder for the web driver
   */
  _configure () {
    const builder = new Builder()
    switch (getHost().host) {
      case 'local':
        builder.withCapabilities(getLocalCapabilities()).forBrowser(getBrowser().browser)
        break
      default:
        builder.withCapabilities(getLocalCapabilities()).forBrowser(getBrowser().browser)
        break
    }
    return builder
  }

  /**
   * This function can be called to build the web driver
   * It is best used in a Before hook
   */
  async build () {
    this.driver = await this._configure().build()
    // Adding this line allows us to upload files from local machines to remote servers (SauceLabs)
    await this.driver.setFileDetector(new FileDetector())
  }

  /**
   * This function can be called to quit the web driver
   * It is best used in an After hook
   */
  async quit () {
    await this.driver.quit()
  }
}
