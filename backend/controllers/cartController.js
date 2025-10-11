import userModel from "../models/userModel"


// add products to user cart
const addToCart = async (req,res) => {
    try {
        
        const {userId,itemId} = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else{
            cartData[itemId] = 1;
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success:true , message:'Added to cart'})

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

// update user cart
const updateCart = async (req,res) => {
    try {
        
        const {userId , itemId ,quantity} = req.body 

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success:true , message:'Cart updated'})


    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

// get user cart data
const getUserCart = async (req,res) => {
    try {
        
        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success: true, cartData })

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

export { addToCart,updateCart, getUserCart}