class FakeDb {

  get type() { return "fake" };

  async getAll(collectionName) {
    let list = [];
    
    if (collectionName == "movies") {
      list.push({
        _id: "1",
        title: "Peli1",
        genre: {_id: "1", name: "Género 1"}
      })
    }
    else if (collectionName == "genres") {
      list.push({
        _id: "1",
        name: "Género 1"
      })
    }
    else {
      throw "Colección inválida " + collectionName;
    }

    return list;
  }
  
  async deleteItem(collectionName, id) {
    console.log("deleting " + id + " from " + collectionName);
  }
}

module.exports = FakeDb 