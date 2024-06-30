import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
  

  
    const total = cartItems.reduce((sum, product) => sum + product.price, 0);



    return (
        <Container>
           
            <Grid container spacing={3}>
                {cartItems.length > 0 ? (
                    cartItems.map((product) => (
                        <Grid item xs={12} key={product.id}>
                            <Card sx={{ display: 'flex', flexDirection: 'row' }}>
                                <img src={product.image} alt={product.title} style={{ width: 150, height: 150, objectFit: 'contain' }} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6">{product.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ maxHeight: '6em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {product.description}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                      Price :  ${product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="secondary"
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        Remove from Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '30vh' }}>
                        <Typography variant="h6" color="text.secondary">Your cart is empty.</Typography>
                    </Box>
                )}
            </Grid>

            {cartItems.length > 0 && (
                <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" gutterBottom>Total Price: ${total}</Typography>
                    <Button variant="contained" color="primary" onClick={clearCart}>
                        Clear Cart
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default CartPage;
