const express = require('express')
const {getAllProducts, getSingleProducts, createNewProducts, updateProducts, deleteProducts} = require('../controllers/productController')

const router = express.Router()


// get all products
router.get('/products', getAllProducts )


// get a single product
router.get('/products/:id', getSingleProducts)

// create a product
router.post('/products', createNewProducts)

// updating a product
router.put('/products/:id', updateProducts )


// delete a product
router.delete('/products/:id', deleteProducts)


module.exports = router