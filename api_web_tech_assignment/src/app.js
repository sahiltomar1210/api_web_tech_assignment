const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const orderRoute = require("./routes/order");

const DATABASE = "mongodb+srv://sahil:sahil@realestate.1jaxzuk.mongodb.net/api_web_tech_assignment";
app.use(express.json());
mongoose.connect(DATABASE,()=>{
    console.log("connected to DB")
})

app.use("/product",productRoute);
app.use("/customer",customerRoute)
app.use("/orders",orderRoute)

app.use("*",(req,res)=>{
    res.send({
        message:"NO API FOUND"
    })
    
})


app.listen(3000,()=>{
    console.log("Server is running at 3000")
})