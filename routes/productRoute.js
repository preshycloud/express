const express = require('express')
const {getAllProducts, getSingleProducts, createNewProducts, updateProducts, deleteProducts} = require('../controllers/productController')

const router = express.Router()


// get all products...get
// router.get('/products', getAllProducts )


// get a single product....get
// router.get('/products/:id', getSingleProducts)

// create a product...post
// router.post('/products', createNewProducts)

// updating a product....put
// router.put('/products/:id', updateProducts )


// delete a product....delete
// router.delete('/products/:id', deleteProducts)



router.route('/products').get(getAllProducts).post(createNewProducts)

router.route('/products/:id').get(getSingleProducts).put(updateProducts).delete(deleteProducts)


module.exports = router