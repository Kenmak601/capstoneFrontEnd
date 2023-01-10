import React from 'react'
import { useContext, useEffect, useState} from 'react';
import { CustomContext } from './Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} className='Text-Color'>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Ken Mak Social Media Capstone
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Cart() {

    const {cart, setCart} = useContext(CustomContext)
    const [totalPrice, setTotalPrice]= useState(0)


    useEffect(() => {
        setTotalPrice(cart.reduce((previousValue, currentValue) => previousValue + currentValue.itemPrice, 0));
    }, [cart])
    
  return (
    <div>
        <div className='container my-5 py-5'>
        <div className='row'>
            <div className='col-12 mb-5'>
            <h1>Your Cart</h1>
            <hr />
            {/* DISPLAY CARD STARTS HERE */}
            { cart[0]? 
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={3}>
                {
                    cart.map(showCart => 
                    (
                    
                        <Grid item key={showCart.postId} xs={12} sm={6} md={3}>
    
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                            <CardMedia
                                component="img"
                                height="100%"
                                image={showCart.itemImage}
                                
                            />

                            <CardContent sx={{ flexGrow: 1 }}>   
                                <h2><b>{showCart.itemName}</b></h2>
                                <hr/>
                                {showCart.itemDescription}
                                <hr/>
                                ${showCart.itemPrice}.00
                                
                            </CardContent>


                                {/* <CardActions>
                                <Button>Checkout</Button>
                                </CardActions> */}

                            </Card>
                        </Grid>
                    ))
                }
                </Grid></Container>: null}
                <h4> Total: ${totalPrice}.00 </h4>
                <Button component={NavLink} to="/checkout">Checkout</Button>
            </div>
        </div>  
   </div>
   <Copyright sx={{ mt: 8, mb: 4 }} />      
   

    </div>
  )
}


