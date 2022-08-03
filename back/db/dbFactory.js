const config = require('config');
const FakeDb = require('./fakeDb.js');
const MongoDb = require('./mongoDb.js');

class DbFactory {
  get db() {
    if (config.get("usarBaseFake")) 
      return new FakeDb();
    else
      return new MongoDb();
  }
}

module.exports = DbFactory 