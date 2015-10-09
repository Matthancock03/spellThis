var db = require('../database');

var Teacher = db.model('Teacher', {
  userID: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  creationDate: {type: Date, required: true, default: Date.now},
  lists: [{type: db.Schema.Types.ObjectId, ref: 'List'}]
});

module.exports = Teacher;
