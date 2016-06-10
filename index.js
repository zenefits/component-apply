/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-component-apply',

  included: function (app) {
    this._super.included(app);
    app.import('bower_components/ember/ember-template-compiler.js');
  }
};
