const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productid : {type:String , required:true}, 
    producttype :{type:String , required:true}, 
    productname :{type:String , required:true}, 
    productprice :{type:Number , required:true}, 
    availablequantity :{type:Number , required:true}
})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;