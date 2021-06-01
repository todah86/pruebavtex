'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductShema = Schema(
    {
        name: String,
        itemId : String,
        picture : String,
        rate : {type : Number, default : 0 },
        category : String,
        actors : String,
        description : String,
        
    }
)
module.exports = mongoose.model('peliculas', ProductShema)