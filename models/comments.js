'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  name: String,
  text: String,
  date: Date
});

// this exports a value, not objectx
module.exports = mongoose.model('Comment', CommentsSchema);
