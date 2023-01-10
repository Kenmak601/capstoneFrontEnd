import React from 'react'
import { useContext } from 'react';
import {useState, useEffect} from 'react'
import { CustomContext } from './Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


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

export default function Marketplace() {
   
    const [marketplaceItems, setMarketplaceItems] = useState ([]); // declare empty[] called friendListData and declare set state for the array
    const {cart, setCart} = useContext(CustomContext)

    const marketplaceItemsApiCall = async() => {
        const response = await fetch("http://localhost:4000/capstoneProject/displayAllMarketplaceItems")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setMarketplaceItems(json)
        })
    }
    useEffect(() => {
        marketplaceItemsApiCall();
    }, [])

  return (
    <div>
    <div className='container my-5 py-5'>
    <div className='row'>
        <div className='col-12 mb-5'>
        <h1>Marketplace</h1>
        <hr />
        {/* DISPLAY CARD STARTS HERE */}
        { marketplaceItems[0]? 
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={3}>
            {
                marketplaceItems.map(product => 
                (
                    <Grid item key={product.itemId} xs={12} sm={6} md={3}>

                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                            <CardMedia
                                component="img"
                                height="100%"
                                image={product.itemImage}
                                alt="Paella dish"
                            />

                            <CardContent sx={{ flexGrow: 1 }}>   
                                <h2><b>{product.itemName}</b></h2>
                                <hr/>
                                {product.itemDescription}
                                <hr/>
                                ${product.itemPrice}.00
                                
                            </CardContent>

                            <CardActions>
                                <Button href={product.itemLink}>Official Store</Button>
                                <Button onClick={()=> setCart([...cart, product ])}> Add to Cart</Button>
                            </CardActions>

                        </Card>
                    </Grid>
                ))
            }
            </Grid></Container>: null}
        </div>
    </div>  
</div>
<Copyright sx={{ mt: 8, mb: 4 }} />
</div>
  )
}
