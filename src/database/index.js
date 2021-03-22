const databaseURL = require('../config/config')

const mongoose = require('mongoose')

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, })

mongoose.Promise = global.Promise

module.exports = mongoose