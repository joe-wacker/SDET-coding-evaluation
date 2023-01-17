const { After, Before } = require('@cucumber/cucumber')
// Create Driver Factory object
const DriverFactory = require('./driver-factory')
const driverFactory = new DriverFactory()

/**
 * Executes Before every scenario
 * Gets scenario name for SauceLabs reporting
 * Builds WebDriver
 */
Before({ tags: '@UI' }, async function (scenario) {
  process.env.SCENARIO_NAME = scenario.pickle.name
  await driverFactory.build()
  this.driver = driverFactory.driver
})

/**
 * Executes After every scenario
 * Quits active driver if HOST != 'local-debug'
 * Builds WebDriver
 */
After({ tags: '@UI' }, async function (scenario) {
  // Quit driver unless HOST is set to 'local-debug'
  if (process.env.HOST !== 'local-debug') {
    this.driver.sleep(5000)
    await driverFactory.quit()
  }
})
