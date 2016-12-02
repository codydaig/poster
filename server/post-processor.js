var express = require('express');
var morgan = require('morgan');

var db = require('./db.js');

module.exports = {
  general: {
    get: function(req, res) { // get all posts
      db.Post.findAll({include: [db.User]})
        .then(function(post) {
          res.json(post)
          res.end();
        });
    },
    post: function(req, res) { // add a new post and if needed a username
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
  filterMessagesByUsername: {
    get: function(req, res) { // filters posts based on username
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
  filterMessageById: {
    get: function(req, res) { // retreives a single post by its id
      db.Post.findAll({where: req.query})
        .then(function(post) {
          res.json(post);
          res.end();
        });
    }
  },
  update: { // updates a single post by its id
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
    delete: function(req, res) { // deletes a single post by its id
      db.Post.destroy({
        where: {
          id: req.body.id
        }
      });
      res.end();
    }
  }
}




