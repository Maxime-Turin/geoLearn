const express = require('express');
const { collectionController } = require('../controllers');

const router = express.Router();

router.route('/collection/:collectionName')
  .get(collectionController.getAllDocuments);

router.route('/collection/:collectionName/:documentName')
  .get(collectionController.getOneDocumentByName);
module.exports = router;
