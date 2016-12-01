var express = require('express');
var morgan = require('morgan');

var db = require('./db.js');

module.exports = {
  // handles adding new posts, and getting the whole collection...
  general: {
    get: function(req, res) {
      db.Post.findAll({include: [db.User]})
        .then(function(post) {
          res.json(post)
          res.end();
        });
    }, // get all posts
    post: function(req, res) {
      db.User.findOrCreate({where: {userName: req.body.userName}})
        .spread(function(user, created) {
          db.Post.create({
            userId: user.get('id'),
            userPost: req.body.message
          }).then(function(message) {
            res.status(201);
          });
        });
        res.end();
    }, // create a new post
  },
  // handles requests for specific data requests or alterations...
  custom: {
    get: function(req, res) {

      res.end();
    }, // retreive a single post by its id
    put: function(req, res) {

      res.end();
    }, // update a single post by its id
    delete: function(req, res) {

      res.end();
    } // delete a single post by its id
  }
}




