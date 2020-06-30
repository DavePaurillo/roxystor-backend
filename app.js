const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// Middleware
app.use(bodyParser.json())

// import route
const productsRoute = require("./routes/products");
app.use('/products', productsRoute)

// ROUTES
app.get('/', (req, res) => {
  res.send('we are on home')
})

// db connection
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected'))

app.listen(8181)