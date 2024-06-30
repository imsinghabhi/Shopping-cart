import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

function ShoppingAppBar() {
  const navigate = useNavigate();
  const { cartItems } = useCart(); 

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton color="inherit" aria-label="home" onClick={handleHomeClick}>
          <HomeIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6">Shopping Cart</Typography>
        </Box>
        <IconButton color="inherit" aria-label="cart" onClick={handleCartClick}>
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ShoppingAppBar;
