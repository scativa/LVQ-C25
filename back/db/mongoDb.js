const config = require('config');
const { MongoClient } = require("mongodb");

class MongoDb {

  get type() { return "mongo" };

  async getAll(collectionName) {
    let list = [];
    const client = new MongoClient(config.get("mongoUrl"));
  
    try {
      await client.connect();
      const database = client.db("moviesStore");
      const collection = database.collection(collectionName);
      const cursor = collection.find();
      await cursor.forEach(item => list.push(item));
   
    } finally {
      await client.close();
    }  
  
    return list;
  }
  
  async deleteItem(collectionName, id) {
    let list = [];
    const client = new MongoClient(config.get("mongoUrl"));
  
    try {
      await client.connect();
      const database = client.db("moviesStore");
      const collection = database.collection(collectionName);
      await collection.deleteOne({_id: id});
   
    } finally {
      await client.close();
    }  
  
    return list;
  }

  async insert(collectionName, document) {
    let result;
    const client = new MongoClient(config.get("mongoUrl"));
  
    try {
      await client.connect();
      const database = client.db("moviesStore");
      const collection = database.collection(collectionName);
      result = await collection.insertOne(document);
   
    } finally {
      await client.close();
    }  
  
    return result;
  }
  
}

module.exports = MongoDb 