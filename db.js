var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter);

// Set some defaults
db.defaults({ users: [], sessions: [] })
  .write();

  module.exports = db;