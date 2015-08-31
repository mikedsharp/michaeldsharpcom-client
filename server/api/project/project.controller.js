'use strict';

var _ = require('lodash');
var fs = require('fs');


// Get list of projects
exports.index = function(req, res) {
  var data = JSON.parse(fs.readFileSync( __dirname + '/projects.json', 'utf8'));

  res.json(data);
};
