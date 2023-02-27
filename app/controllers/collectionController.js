const models = require('../models');
const { capitalizeFirstLetter } = require('../helpers');

module.exports = {
  async createOneCollection(req, res) {
    const newCollection = req.body.name;
    const collectionName = capitalizeFirstLetter(newCollection);
    const result = await models.collection.createCollection(collectionName);
    res.json(result.collectionName);
  },

  async getAllCollections(req, res) {
    const result = await models.collection.getAllCollections();
    res.json(result);
  },

  async deleteCollection(req, res) {
    const collectionName = req.body.name;
    const collection = capitalizeFirstLetter(collectionName);
    const result = await models.collection.deleteCollection(collection);
    res.json(result);
  },

};
