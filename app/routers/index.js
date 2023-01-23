const express = require('express');
const { documentController } = require('../controllers');

const router = express.Router();

router.route('/collection/:collectionName')
  .get(documentController.getAllDocuments)
  .post(documentController.addNewDocument);

router.route('/collection/:collectionName/:documentName')
  .get(documentController.getOneDocumentByName);

module.exports = router;
