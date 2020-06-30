const express = require('express')
const router = express.Router()
const currencyParser = require('../utility/currencyParser')
const Product = require('../models/Product')

// find all
router.get('/all', async (req, res) => {
  try {
    const result = await Product.find()
    res.json(result)
  } catch (err) {
    res.json({ message: err })
  }
})

// find by id
router.get('/:productId', async (req, res) => {
  try {
    const result = await Product.findOne({ _id: req.params.productId })
    res.json(result)
  } catch (err) {
    res.json({ message: err })
  }
})

// save data
router.post('/save', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    price: currencyParser(req.body.price)
  })

  try {
    const savedProduct = await product.save()
    res.json(savedProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

// delete data
router.delete('/delete/:productId', async (req, res) => {
  try {
    const removedProduct = await Product.deleteOne({ _id: req.params.productId })
    res.json(removedProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

// udpate data
router.patch('/update/:productId', async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          quantity: req.body.quantity,
          price: currencyParser(req.body.price)
        }
      }
    )
    res.json(updatedProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router