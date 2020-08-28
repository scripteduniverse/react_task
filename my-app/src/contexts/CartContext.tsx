import React, { useState } from 'react';
import { IGoodCart } from '../interfaces';

// Defining type for Context
type CartContextType = {
    cart: IGoodCart[],
    setCart: React.Dispatch<React.SetStateAction<IGoodCart[]>>
}

export const CartContext = React.createContext<CartContextType | null>(null);

// Creating simple custom hook to use context more aesthetically 
export const useCart = (): CartContextType | null => React.useContext(CartContext);

export const CartProvider: React.FC = ({ children }) => {
    const defaultCart: IGoodCart[] = [];

    // Creating state which will hold values for context
    const [cart, setCart] = useState(defaultCart);
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}