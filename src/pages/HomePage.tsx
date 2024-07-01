import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardActions, Button, Typography, CircularProgress, Box } from '@mui/material';
import { useCart } from '../context/CartContext';
import Product from '../util/interface';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { addToCart, removeFromCart, cartItems } = useCart();

    useEffect(() => {
        axios.get<Product[]>('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false); 
            });
    }, []); 
   


    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid item xs={12} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', maxWidth: 900, padding: 4 }}>
                        <img src={product.image} alt={product.title} style={{ width: 150, height: 150, objectFit: 'contain' }} />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="h6">{product.title}</Typography>
                            <Typography>${product.price.toFixed(2)}</Typography>
                            <Typography variant="body2" style={{ maxHeight: '6em', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5em' }}>
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ flexDirection: 'column' }}>
                            {cartItems.some((item) => item.id === product.id) ? (
                                <Button
                                    size="small"
                                    color="secondary"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Remove from Cart
                                </Button>
                            ) : (
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            )}
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
