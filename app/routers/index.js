const express = require('express');
const { documentController, collectionController } = require('../controllers');

const router = express.Router();

router.route('/collection/:collectionName')
  .get(documentController.getAllDocuments)
  .post(documentController.addNewDocument)
  .delete(documentController.deleteDocument);

router.route('/collection/:collectionName/:documentName')
  .get(documentController.getOneDocumentByName)
  .post(documentController.updateOneDocument);

router.route('/collection')
  .get(collectionController.getAllCollections)
  .post(collectionController.createOneCollection)
  .delete(collectionController.deleteCollection);

module.exports = router;
