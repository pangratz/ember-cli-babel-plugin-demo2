/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-babel-plugin-demo2',

  setupPreprocessorRegistry: function(type, registry) {
    var BabelTransformerPlugin = require('./babel-plugin-demo2');

    registry.add('babel-plugin', {
      name: 'babel-plugin-demo2',
      plugin: BabelTransformerPlugin
    });
  }
};
