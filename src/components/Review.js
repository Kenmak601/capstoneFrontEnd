import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import {useState, useEffect} from 'react'
import { CustomContext } from './Context';
import { ImageList } from '@mui/material';


const addresses = ['123 Sydney Street', 'Sydney', 'Sydney', '2000', 'Australia'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr Kenneth' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '01/2023' },
];

export default function Review() {

    const {cart} = useContext(CustomContext) // this line is to hook the cart array from the checkout.js page
    const [totalPrice, setTotalPrice]= useState(0)


    useEffect(() => {
        setTotalPrice(cart.reduce((previousValue, currentValue) => previousValue + currentValue.itemPrice, 0));
    }, [cart])

  return (
    <React.Fragment>


      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ImageList sx={{ width: 150, height: 90 }}>
            <ImageListItem><img src={product.itemImage}/></ImageListItem>
            </ImageList>
            <ListItemText primary={product.itemName} secondary={product.itemDescription} />
            <Typography variant="body2">${product.itemPrice}.00</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice}.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Ken Mak</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}