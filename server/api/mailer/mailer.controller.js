'use strict';

var _ = require('lodash');
var nodemailer = require('nodemailer');

// Get list of mailers
exports.index = function(req, res) {
  res.json([]);
};

exports.create = function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: '',
        pass: ''
    }
});

//remove details
var mailOptions = {
    from: '', // sender address
    to: '', // list of receivers
    subject: '', // Subject line
    text: '' // plaintext body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});




};
