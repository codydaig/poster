var express = require('express');
var morgan = require('morgan');

var db = require('./db.js');

module.exports = {
  // handles adding new posts, and getting the whole collection...
  general: { // get all posts
    get: function(req, res) {
      db.Post.findAll({include: [db.User]})
        .then(function(post) {
          res.json(post)
          res.end();
        });
    },
    post: function(req, res) { // create a new post
      db.User.findOrCreate({where: {userName: req.body.userName, firstName: req.body.firstName, lastName: req.body.lastName}})
        .spread(function(user, created) {
          db.Post.create({
            userId: user.get('id'),
            userPost: req.body.userPost
          })
          .then(function(message) {
            res.status(201);
            res.end();
          });
        });
    },
  },
  // gets all posts based affiliated with specific user.
  filterMessagesByUsername: {
    get: function(req, res) { // retreive all posts based on username.
      db.User.findAll({where: {userName: req.query.userName}})
        .spread(function(user, created) {
          db.Post.findAll({
            where: {
              userId: user.get('id'),
            }
          })
          .then(function(post) {
            res.json(post);
            res.end();
          });
        })
    }
  },
  // gets a single post based on username.
  filterMessageById: {
    get: function(req, res) { // retreive a single post by its id
      db.Post.findAll({where: req.query})
        .then(function(post) {
          res.json(post);
          res.end();
        });
    }
  },
  // handles updates to existing posts.
  update: { // update a single post by its id
    put: function(req, res) {
      db.Post.update(
      {
        userPost: req.body.userPost
      },
      {
        where: {
          id: req.body.id
        }
      });
      res.end();
    },
    delete: function(req, res) { // delete a single post by its id
      db.Post.destroy({
        where: {
          id: req.body.id
        }
      });
      res.end();
    }
  }
}




