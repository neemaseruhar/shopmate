import {createContext} from 'react';

const initialState= {
    cartlist: [],
    value: 0
}

const CartContext = createContext(initialState);

export const cartProvider = ({children}) =>{
    const value={}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider> 
    )
}