
'use strict';

const Discovery = require('./lib/discovery');
const Device = require('./lib/device');
const Keys = require('./lib/keys');

Discovery.Discovery = Discovery;
Discovery.Device = Device;
Discovery.Keys = Keys;

module.exports = Discovery;
