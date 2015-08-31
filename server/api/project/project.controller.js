'use strict';

var _ = require('lodash');

// Get list of projects
exports.index = function(req, res) {
  res.json([{
    title : "Rebound",
    subtitle : "A game I made for a competition",
    description: "look at this amazing thing I made, hahahahaha, give me money!",
    images : {
      mainImage : {
        title : "the main image",
        url : "imageurl-main.jpg"
      },
      gallery: [
        {
          title: "an image",
          imageThumbUrl : "thing-thumb.jpg",
          imageLargeUrl : "thing-large.jpg"
        }
      ],
      links : [{
        title : "link A",
        url: "linka.html"
      }],
      videos : [{
        title : "video A",
        url : "youtube.com/embed?thing=5"
      }]
    }
  }]);
};
