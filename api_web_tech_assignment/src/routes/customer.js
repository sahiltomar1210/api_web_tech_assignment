const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const Customer = require("../models/Customer");
router.use(bodyparser.json());

router.get("/:customerID", async(req,res)=>{
    try{
        const customer = await Customer.findOne({customerid:req.params.customerID});
            if(!customer){
               res.send({
                   status:"Failed",
                   message:"No Customer Id present"
               })
            }
            else{
            res.status(200).json({
                status:"Success",
                customer
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
        const { customerid, customername, email, balance } = req.body;
        const customer = await Customer.create({
            customerid: customerid,
            customername: customername,
            email: email,
            balance: balance
        })

        res.status(200).json({
            status :"Success",
            customer
        })

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})
router.get("/", async(req,res)=>{
    try{
        const customer = await Customer.find();
            if(!customer){
               res.status(400).json({
                   status:"Failed",
                   message:"No Customers Found"
               })
            }else{
            res.status(200).json({
                status:"Success",
                customer
            })
        }


    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})
router.put("/email/costOfAnOrder", async(req,res)=>{
    try{
        const { email,costOfAnOrder } = req.body;
        const customer = await Customer.findOne({email:email})
        if(!customer){
            res.status(400).json({
                status:"Failed",
                message:"No Customer Present With This Email"
            })
        }
        else{
            const bal = customer.balance
            const leftbalance = bal- costOfAnOrder
            const custom = await Customer.updateOne({
                email:email,
                balance:leftbalance
              });
                   
              res.status(200).json({
                  status :"Success",
                  custom
              })
        }

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message :e.message
        })
    }
})
router.put("/balance", async(req,res)=>{
    try{
        const { email,balance } = req.body;
        const customer = await Customer.findOne({email:email})
        if(!customer){
            res.status(400).json({
                status:"Failed",
                message:"No Customer Present With This Email"
            })
        }
        else{
            const custom = await Customer.updateOne({
                email:email,
                balance:balance
              });
                   
              res.status(200).json({
                  status :"Success",
                  custom
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