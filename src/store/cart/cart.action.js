import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

// * Utility functions starts

const addCartItems = (cartItems, productToAdd) => {
    
    /* 
    -> If product is present in the cartItems then only increase the qunatity of the item.
    -> If product not found in the cartItems then add the product to the cartItems array.
    */
   
   const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
   
   if (existingCartItem) {
       return cartItems.map(cartItem => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    }
    
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearCartItem = (cartItems, cartItemToClear) => {
    console.log('here')
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

// * Utility functions ends

export const setIsCartOpen = (boolean) =>
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

// * Helpers function starts

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItems(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

// * Helper function ends