'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:project_id', controller.find);

module.exports = router;
