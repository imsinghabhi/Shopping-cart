import React, { createContext, useState, useContext, useEffect } from 'react';
import localforage from 'localforage';
import Product from '../util/interface'; 
import CartContextType from '../util/CartContextType';

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

  
    useEffect(() => {
        localforage.getItem<Product[]>('cartItems').then((items) => {
            if (items) {
                setCartItems(items);
            }
        });
    }, []);

    
    useEffect(() => {
        localforage.setItem('cartItems', cartItems);
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
