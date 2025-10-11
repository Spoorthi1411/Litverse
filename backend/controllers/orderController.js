

//placing orders using COD method

import userModel from "../models/userModel";

const placeOrder = async (req,res) =>{

    try {
        const { userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:'Order Placed'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//placing order using Stripe
const placeOrderStripe = async (req,res) =>{
    
}

//placing order using Razorpay
const placeOrderRazorpay = async (req,res) =>{
    
}

//All orders data for Admin panel
const allOrders = async (req,res) =>{
    
}

//user order data for frontend
const userOrders = async (req,res) =>{
    
}

//Update order status from admin panel 
const updateStatus = async (req,res) =>{
    
}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}