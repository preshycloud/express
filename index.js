// import required modules
const { isUTF8 } = require('buffer')
const express = require('express')
const app = express()
const port = 8000



// const fs = require("fs")

const productRoute = require('./routes/productRoute')

// storing pages in a variable
// const homePage = fs.readFileSync('./pages/index.html', 'utf-8')

// const projectPage = fs.readFileSync('./pages/project.html', 'utf-8')
// const contactPage = fs.readFileSync('./pages/contact.html', 'utf-8')
// const productPage = fs.readFileSync('./pages/product.html', 'utf-8')
// const testimonialPage = fs.readFileSync('./pages/testimonial.html', 'utf-8')

app.get('/', (req, res) => {
    res.send( "homepage" )
})

// app.get('/contact', (req, res) => {
//     res.send(contactPage)
// })
// app.get('/product', (req, res) => {
//     res.send(productPage)
// })
// app.get('/project', (req, res) => {
//     res.send(projectPage)
// })
// app.get('/testimonial', (req, res) => {
//     res.send(testimonialPage)
// })

// using product route
app.use(productRoute)
// server will now json data
app.use(express.json)


app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})