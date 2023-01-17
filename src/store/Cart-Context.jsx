import React from 'react'
import { createContext } from 'react'
const CartContext = createContext({
    items : [],
    totalAmount:0,
    addItem:()=>null,
    removeItem:()=>null
})
export default CartContext