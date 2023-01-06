const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const Product = require("../models/Product")
router.use(bodyparser.json());

router.get("/productID/:productID", async(req,res)=>{
    try{
        const product = await Product.find({productid:req.params.productID});
            if(!product){
               res.status(400).json({
                   status:"Failed",
                   message:"No Product Id present"
               })
            }else{
            res.status(200).json({
                status:"Success",
                product
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
        const {productid, producttype, productname, productprice, availablequantity} = req.body;
        const product = await Product.create({
            productid : productid, 
            producttype :producttype, 
            productname :productname, 
            productprice :productprice, 
            availablequantity :availablequantity
        })

        res.status(200).json({
            status :"Success",
            product
        })

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})
router.put("/:productName/availableQuantity", async(req,res)=>{
    try{
        const {availablequantity} = req.body;

        const productName = await Product.find({productname:req.params.productName});
            if(!productName){
               res.status(400).json({
                   status:"Failed",
                   message:"No Product Name present"
               })
            }
            else{
                const product = await Product.updateOne({
                  availablequantity:availablequantity
                });
                     
                res.status(200).json({
                    status :"Success",
                    product
                })
            }
       

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})
router.get("/:producttype", async(req,res)=>{
    try{
        const product = await Product.find({producttype : req.params.producttype});
            if(!product){
               res.status(400).json({
                   status:"Failed",
                   message:"No Product Id present"
               })
            }else{
            res.status(200).json({
                status:"Success",
                product
            })
        }


    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})

router.get("/", async(req,res)=>{
    try{
        const product = await Product.find();
            if(!product){
               res.status(400).json({
                   status:"Failed",
                   message:"No Products Found"
               })
            }else{
            res.status(200).json({
                status:"Success",
                product
            })
        }


    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})

module.exports = router;