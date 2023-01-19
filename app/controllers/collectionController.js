const models = require('../models');
const { capitalizeFirstLetter, minimizeFirstLetter } = require('../helpers');

module.exports = {
  async getAllDocuments(req, res) {
    const { collectionName } = req.params;
    const result = await models.document.findAllDocuments(collectionName);
    res.json(result);
  },

  async getOneDocumentByName(req, res) {
    let { collectionName, documentName } = req.params;
    collectionName = minimizeFirstLetter(collectionName);
    documentName = capitalizeFirstLetter(documentName);
    console.log(collectionName + documentName);
    const result = await models.document.findDocumentByName(collectionName, documentName);
    res.json(result);
  },
};
