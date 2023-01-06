const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerid : {type:String , required:true}, 
    customername :{type:String , required:true}, 
    email :{type:String , required:true,unique:true}, 
    balance :{type:Number , required:true}
},{timestamps:true})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;