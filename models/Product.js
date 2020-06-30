const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('Products', ProductSchema)