const models = require('../models');
const { capitalizeFirstLetter, minimizeFirstLetter } = require('../helpers');

module.exports = {
  async getAllDocuments(req, res) {
    let { collectionName } = req.params;
    // Adapte les premières lettre au "modèle" de la bdd
    collectionName = minimizeFirstLetter(collectionName);
    const result = await models.document.findAllDocuments(collectionName);
    res.json(result);
  },

  async getOneDocumentByName(req, res) {
    let { collectionName, documentName } = req.params;
    // Adapte les premières lettre au "modèle" de la bdd
    collectionName = minimizeFirstLetter(collectionName);
    documentName = capitalizeFirstLetter(documentName);

    const result = await models.document.findDocumentByName(collectionName, documentName);
    res.json(result);
  },

  async addNewDocument(req, res) {
    let { collectionName } = req.params;
    collectionName = minimizeFirstLetter(collectionName);
    const newDocument = { ...req.body };
    const result = await models.document.createDocument(collectionName, newDocument);
    res.json(result);
  },

  async deleteDocument(req, res) {
    let { collectionName } = req.params;
    collectionName = minimizeFirstLetter(collectionName);
    // Récupération du nom du document
    const documentToDelete = { ...req.body };
    const result = await models.document.deleteDocument(collectionName, documentToDelete);
    res.json(result);
  },

  async updateOneDocument(req, res) {
    let { collectionName, documentName } = req.params;
    // Adapte les premières lettre au "modèle" de la bdd
    collectionName = minimizeFirstLetter(collectionName);
    documentName = capitalizeFirstLetter(documentName);
    const modifiedDocument = { ...req.body };
    const result = await models.document
      .updateDocument(collectionName, documentName, modifiedDocument);
    res.json(result);
  },
};
