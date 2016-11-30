var express = require('express');
var morgan = require('morgan');

var mongoDB = require('./db.js');

var url = 'mongodb://localhost:27017/test';// need to add database name here.

module.exports = {
  // handles adding new posts, and getting the whole collection...
  general: {
    get: function(req, res) {
      console.log('genGET')
      // mongoDB.connect(url, function(err, db) {
      //   if (err) {console.log('no go on that GENERAL GET')}
      //   else {
      //     console.log('good you are in GENERAL GET');
      //   }
      // });
      res.end();
    }, // get all posts
    post: function(req, res) {
      console.log('genPOST')
      // mongoDB.connect(url, function(err, db) {
      //   if (err) {console.log('no go on that GENERAL GET')}
      //   else {
      //     console.log('good you are in GENERAL GET');
      //   }
      // });
      res.end();
    }, // create a new post
  },
  // handles requests for specific data requests or alterations...
  custom: {
    get: function(req, res) {
      console.log('custGET')
      // mongoDB.connect(url, function(err, db) {
      //   if (err) {console.log('no go on that GENERAL GET')}
      //   else {
      //     console.log('good you are in GENERAL GET');
      //   }
      // });
      res.end();
    }, // retreive a single post by its id
    put: function(req, res) {
      console.log('custPUT')
      // mongoDB.connect(url, function(err, db) {
      //   if (err) {console.log('no go on that GENERAL GET')}
      //   else {
      //     console.log('good you are in GENERAL GET');
      //   }
      // });

    }, // update a single post by its id
    delete: function(req, res) {
      console.log('custDELETE')
      // mongoDB.connect(url, function(err, db) {
      //   if (err) {console.log('no go on that GENERAL GET')}
      //   else {
      //     console.log('good you are in GENERAL GET');
      //   }
      // });
      res.end();
    } // delete a single post by its id
  }
}




