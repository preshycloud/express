const express = require('express')
const router = express.Router()


// get all products
router.get('/products', (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "IPhone 15",
            productPrice: "$1500"
        },
        {
            productName: "IPhone 14",
            productPrice: "$1200"
        },
        {
            productName: "IPhone 13",
            productPrice: "$800"
        }
    ])
})


// get a single product
router.get('/products/:id', (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "IPhone 15",
            productPrice: "$1500"
        }
    ])
})

// create a product
router.post('/products', (req, res) => {
    res.status(200)
    res.json({
        message: "product added successfully"
    })
})

// updating a product
router.put('/products/:id', (req, res) => {
    res.status(200)
    res.json({
        message: "product updated successfully"
    })
})


// delete a product
router.delete('/products/:id', (req, res) => {
    res.status(200)
    res.json({
        message: "product deleted successfully"
    })
})


module.exports = router