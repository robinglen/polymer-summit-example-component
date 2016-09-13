const structuredDataProxy = require('wct-structured-data-testing');

module.exports = {
  plugins: {
    local: {
      disabled: true,
      browsers: ['chrome']
    }
  },
  /* set up test server hooks */
  registerHooks: function(wct) {
    /**
     * This will add a route that acts as a proxy to the Googles Structured Data tool api
     */
    wct.hook('prepare:webserver', structuredDataProxy.init);
  }
};
