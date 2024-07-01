import React from 'react';
import { CartProvider } from './context/CartContext';
import RouterComponent from './component/RouterComponent';

const App: React.FC = () => {
    return (
        <CartProvider>
            <RouterComponent />
        </CartProvider>
    );
};

export default App;
