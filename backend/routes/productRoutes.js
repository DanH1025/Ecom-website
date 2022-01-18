const express = require('express');
const router = express.Router();
const {getAllProducts,getProductById} = require('../controller/productController');


//fetch all data from database to the / database
//is a GET request to /api/products
router.get('/',getAllProducts);

//fetch a product from database by id / database
//is a GET request to /api/products/:id
router.get('/:id',getProductById );


module.exports = router;