import * as actionType from '../constants/cartConstants';
import axios from 'axios';

export const addToCart =  (id,qty) => async (dispatch,getState)=>{
    
    const {data} = await axios.get(`/api/products/${id}`);

    dispatch({
        type: actionType.ADD_TO_CART,
        payload:{
            product:data._id,
            name:data.name,
            imageUrl:data.imageUrl,
            price:data.price,
            countInStock: data.countInStock,
            qty,
        },
    });
    //store the cartItem in the localstorage to save in case of refreshed page or changed tab screen
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id)=> (dispactch, getState)=>{ 
    dispactch({
        type: actionType.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));

};