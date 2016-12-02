var express = require('express');
var morgan = require('morgan');

var db = require('./db.js');

module.exports = {
  general: {
    get: function(req, res) { // get all posts
      db.Post.findAll({include: [db.User]})
        .then(function(post) {
          if (post.length) {
            res.json(post)
          } else {
            res.write('database is empty right now. :(');
          }
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
            if (post.length) {
              res.json(post);
            } else {
              res.write('sorry no messages from that person. :(');
            }
            res.end();
          });
        })
    }
  },
  filterMessageById: {
    get: function(req, res) { // retreives a single post by its id
      db.Post.findAll({where: req.query})
        .then(function(post) {
          if (post.length) {
            res.json(post);
          } else {
            res.write('that id is lonely right now, or does not exist. :(');
          }
          res.end();
        });
    }
  },
  update: { // updates a single post by its id
    put: function(req, res) {
      db.Post.findAll({where: {id: req.body.id}})
        .then(function(post) {
          if (post) {
            db.Post.update(
            {
              userPost: req.body.userPost
            },
            {
              where: {
                id: req.body.id
              }
            });
            res.status(204);
          } else {
            res.status(404);
          }
          res.end();
        });
    },
    delete: function(req, res) { // deletes a single post by its id
      db.Post.findAll({where: {id: req.body.id}})
        .then(function(post) {
          if (post) {
            db.Post.destroy({
              where: {
                id: req.body.id
              }
            });
            res.status(204);
          } else {
            res.status(404);
          }
          res.end();
        });
    }
  }
}




