import React, { useEffect } from 'react'
import {products} from "../assets/assets.js";
import {createContext,useState} from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const [cartItems,setCartItems]= useState({});

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


    const value = {
        products,
        currency,
        cartItems,addToCart,
        updateQuantity,
    }
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
