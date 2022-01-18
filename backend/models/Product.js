const mongoose = require('mongoose');


// this is the structure of the database item collections having the attributes of name,description,price , couninstock and imgurl
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    countInStock:{
        type: Number,
        required:true
    },
    imageUrl:{
        type: String,
        required:true
    }

}); 

//creating the model for mongoose and set the collection to the string specified "product"
const Product = mongoose.model('product', productSchema);

module.exports = Product;