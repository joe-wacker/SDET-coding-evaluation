require('dotenv').config()

const TIMESTAMP = Date.now()

module.exports = {
  default: {
    // parallel: 2,
    // retry: 2,
    format: [
      `html:reports/cucumber-report-${TIMESTAMP}.html`,
      `json:reports/cucumber-report-${TIMESTAMP}.json`,
      'summary',
      'progress-bar',
      './node_modules/@cucumber/pretty-formatter'
    ],
    require: ['./support/**/*.js', './features/step_definitions/**/*.js'],
    tags: process.env.CUCUMBER_TAGS
  }
}
