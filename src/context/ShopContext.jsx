import React, { useEffect } from 'react'
import {products} from "../assets/assets";
import {createContext,useState} from "react";
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;

    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);

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

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId]; // cartItems[itemId] is a number
        }
        return totalCount;
    }

    const updateQuantity = async(itemId,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,navigate,
        search, setSearch, showSearch, setShowSearch,
        cartItems,addToCart,getCartCount,
        getCartAmount,
        updateQuantity,
    }
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
