const { db } = require('../clients/mongoDB');

module.exports = {
  async findAllDocuments(collec) {
    const collection = db.collection(`${collec}`);
    const result = await collection.find({}).toArray();
    return result;
  },

  async findDocumentByName(collec, documentName) {
    const collection = db.collection(`${collec}`);
    const result = await collection.find({ name: documentName }).toArray();
    return result;
  },

  async createDocument(collec, newDocument) {
    const collection = db.collection(`${collec}`);
    const result = await collection.insertOne(newDocument);
    return result;
  },

  async deleteDocument(collec, documentName) {
    const collection = db.collection(`${collec}`);
    const result = await collection.deleteOne(documentName);
    return result;
  },
};
