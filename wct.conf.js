var napCoreSauceLabsConfig = [];

module.exports = {
  plugins: {
    sauce: napCoreSauceLabsConfig,
    local: {
      disabled: true,
      browsers: ['chrome']
    }
  },
  /* set up test server hooks */
  registerHooks: function(wct) {
    // wct.hook('prepare:webserver', structuredDataProxy.init);
  }
};
