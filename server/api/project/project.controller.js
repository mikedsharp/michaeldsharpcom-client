'use strict';

var _ = require('lodash');
var fs = require('fs');


// Get list of projects
exports.index = function(req, res) {
  var data = JSON.parse(fs.readFileSync( __dirname + '/projects.json', 'utf8'));

  res.json(data);
};

exports.find = function(req, res) {
  var data = JSON.parse(fs.readFileSync( __dirname + '/projects.json', 'utf8'));
  for(var i = 0; i < data.length; i++){
    if(data[i].id === req.params.project_id){
      data = res.json(data[i]);
      break;
    }
  }
  res.json(data);
};
