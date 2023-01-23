const express = require('express');
const { documentController } = require('../controllers');

const router = express.Router();

router.route('/collection/:collectionName')
  .get(documentController.getAllDocuments)
  .post(documentController.addNewDocument)
  .delete(documentController.deleteDocument);

router.route('/collection/:collectionName/:documentName')
  .get(documentController.getOneDocumentByName)
  .post(documentController.updateOneDocument);

module.exports = router;
