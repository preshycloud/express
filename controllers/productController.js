exports.getAllProducts =  (req, res) => {
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
}


exports.getSingleProducts = (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "IPhone 15",
            productPrice: "$1500"
        }
    ])
}


exports.createNewProducts = (req, res) => {
    res.status(200)
    res.json({
        message: "product added successfully"
    })
}


exports.updateProducts = (req, res) => {
    res.status(200)
    res.json({
        message: "product updated successfully"
    })
}


exports.deleteProducts = (req, res) => {
    res.status(200)
    res.json({
        message: "product deleted successfully"
    })
}