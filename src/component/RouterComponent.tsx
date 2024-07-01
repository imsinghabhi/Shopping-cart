import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ShoppingAppBar from './ShoppingAppBar';

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <ShoppingAppBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
