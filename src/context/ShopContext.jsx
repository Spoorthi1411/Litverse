import React, { useEffect } from 'react'
import {products} from "../assets/assets.js";
import {createContext,useState} from "react";
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee =10;
    const [cartItems,setCartItems]= useState({});
    const navigate = useNavigate();

    const addToCart = async(itemId)=>{
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] +=1;
        }
        else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const updateQuantity = async(itemId,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }


    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,addToCart,
        updateQuantity,
        getCartAmount,navigate,
    }
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
