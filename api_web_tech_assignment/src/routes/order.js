const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const Order = require("../models/Order");

router.get("/", async(req,res)=>{
    try{
        const orders = await Order.find();
            if(!orders){
               res.status(400).json({
                   status:"Failed",
                   message:"No Orders Found"
               })
            }else{
            res.status(200).json({
                status:"Success",
                orders
            })
        }


    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})
router.post("/", async(req,res)=>{
    try{
        const { customerid, inventoryid, itemname, quantity } = req.body;
        const order = await Order.create({
            customer_id: customerid,
            inventory_id: inventoryid,
            item_name: itemname,
            quantity: quantity
        })

        res.status(200).json({
            status :"Success",
            order
        })

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})

module.exports = router;