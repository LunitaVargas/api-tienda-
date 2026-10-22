
const express = require('express');
const router = express.Router();

const postProducto = require('../controllers/postProducto.controller');
const putProducto = require('../controllers/putProducto.controller');
const deleteProducto = require('../controllers/deleteProducto.controller');

router.post('/productos', postProducto);
router.put('/productos/:id', putProducto);
router.delete('/productos/:id', deleteProducto);

module.exports = router;
