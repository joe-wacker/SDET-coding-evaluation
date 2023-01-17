/**
 * Return Selenium host value
 * @returns {{host: string}}
 */
function getHost () {
  return {
    host: process.env.HOST || 'local'
  }
}

/**
 * Return Selenium browser value
 * @returns {{browser: (string|string)}}
 */
function getBrowser () {
  return {
    browser: process.env.BROWSER_NAME || 'chrome'
  }
}

/**
 * Return selenium local capabilities for browser builder
 * @returns object w/local capabilities
 */
function getLocalCapabilities () {
  return {
    timeouts: {
      script: 45000,
      pageLoad: 45000,
      implicit: 20000
    },
    'goog:chromeOptions': {
      args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--incognito', '--no-sandbox'],
      prefs: {
        // 0 - Default, 1 - Allow, 2 - Block
        'profile.managed_default_content_settings.notifications': 1
      }
    }
  }
}

module.exports = { getHost, getBrowser, getLocalCapabilities }
