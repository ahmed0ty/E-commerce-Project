import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { authContext } from './AuthContext';

export const cartcontext = createContext();

const CartcontextProvider = ({ children }) => {

    const { token } = useContext(authContext);
    const [numofitems, setnumofitems] = useState(0);
    const [products, setproducts] = useState([]);
    const [totalprice, settotalprice] = useState(0);
    const [cartId, setcartId] = useState(0);

    async function addproductTocart(productId) {
        try {
            const { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/cart", 
                { productId: productId }, 
                {
                    headers: {
                        token: localStorage.getItem("tkn"),
                    },
                }
            );

            getusercart();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getusercart() {
        try {
            const { data } = await axios.get(
                "https://ecommerce.routemisr.com/api/v1/cart", 
                {
                    headers: { token: localStorage.getItem("tkn") },
                }
            );

            setnumofitems(data.numOfCartItems);
            setproducts(data.data.products);
            settotalprice(data.data.totalCartPrice);
            setcartId(data.data._id)

            return data;
        } catch (error) {
            console.log(error, "getusercartcontext");
        }
    }

    async function UpdataCount(id, count) {
        try {
            let { data } = await axios.put(
                `https://ecommerce.routemisr.com/api/v1/cart/${id}`, 
                { count: count }, 
                { headers: { token: localStorage.getItem("tkn") } }
            );

            setnumofitems(data.numOfCartItems);
            setproducts(data.data.products);
            settotalprice(data.data.totalCartPrice);
            setcartId(data.data._id)
            return data;
        } catch (error) {
            console.log(error, "error update count");
        }
    }

    async function DeleteItem(id) {
        try {
            const { data } = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart/${id}`,  
                { headers: { token: localStorage.getItem("tkn") } }
            );
            setnumofitems(data.numOfCartItems);
            setproducts(data.data.products);
            settotalprice(data.data.totalCartPrice);
            setcartId(data.data._id)
            return data;
        } catch (error) {
            console.log( "error update count",error);
        }
    }

    async function ClearCart() {
        try {
            const { data } = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart`,  
                { headers: { token: localStorage.getItem("tkn") } }
            );
            setnumofitems(0);
            setproducts([]);
            settotalprice(0);
            return data;
        } catch (error) {
            console.log( "error update count",error);
        }
    }


    useEffect(function() {
        if (token != null) {
            getusercart();
        }
    }, [token]);

    return (
        <cartcontext.Provider value={{ addproductTocart, getusercart, products, totalprice, numofitems, UpdataCount ,DeleteItem, ClearCart, cartId,setnumofitems,settotalprice,setproducts }}>
            {children}
        </cartcontext.Provider>
    );
}

export default CartcontextProvider;
