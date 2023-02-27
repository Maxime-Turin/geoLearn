const { db } = require('../clients/mongoDB');

module.exports = {
  async createCollection(newCollection) {
    const result = await db.createCollection(newCollection);
    return result;
  },

  async getAllCollections() {
    const result = await db.listCollections().toArray();
    return result;
  },

  async deleteCollection(collection) {
    const result = await db.dropCollection(collection);
    return result;
  },
};
