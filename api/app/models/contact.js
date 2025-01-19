const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobilePhone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    required: true,
  },
  arrivedAt: {
    type: Date,
    required: true
  },
  departureAt: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'contacts',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = Schema