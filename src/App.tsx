import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'; // Assuming you have a CartPage component
import { CartProvider } from './context/CartContext';
import ShoppingAppBar from './component/ShoppingAppBar';

const App: React.FC = () => {
    return (
        <CartProvider>
            <Router>
              <ShoppingAppBar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
