var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductName:{
        type:String,
        trim:true,
        required:true,
        minlength:3,
        maxlength:50
    },
    ProductShortCode:{
        type:String,
        trim:true,
        required:true,
        minlength:3,
        maxlength:50
    },
    Category:{
        type:String,
        trim:true,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
    Description:{
        type:String,
     
    },
    ImageUrl:{
        type:String,
 
    },
    IsBestAchived:{
        type:Boolean,
     
    },
    CreatedDate:{
        type:String,
    
    },
    Origin:{
        type:String,
    },
})

const Product = mongoose.model('Product',ProductSchema );
module.exports = Product;