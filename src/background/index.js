'use strict';

var raven = require('./raven');

if (window.EXTENSION_CONFIG.raven) {
  raven.init(window.EXTENSION_CONFIG.raven);
}

require('./hypothesis-chrome-extension');
require('./install');
