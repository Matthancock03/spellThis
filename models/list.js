var db = require('../database');

var listSchema = db.Schema({
  className: {type: String, required: true},
  testName: {type: String, required: true},
  description: {type: String, required: true},
  creationDate: {type: Date, required: true, default: Date.now},
  wordList: [String],
  wordsAudio: [Buffer]
});
var List = db.model('List', listSchema);
module.exports = List;
