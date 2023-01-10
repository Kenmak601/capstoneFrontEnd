import * as React from 'react';
import { useContext } from 'react';
import  { CustomContext } from './Context';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';





export default function ButtonAppBar() {
  const { authenticated, setAuthenticated, setCurrentUserInfo, currentUserInfo, setCart } = useContext(CustomContext);

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton> */}
            {authenticated === true ?  <><Button color="inherit" component={NavLink} to="/userProfiles">{currentUserInfo[0].username}</Button>
            <Button color="inherit" component={NavLink} to="/UserHomePage"><HomeIcon/></Button> 
            <Button color="inherit" component={NavLink} to="/FriendsPage"><PeopleIcon/></Button> 
            <Button color="inherit" component={NavLink} to="/Marketplace"><StoreIcon/></Button> 
            <Button color="inherit" component={NavLink} to="/cart"><ShoppingCartIcon/></Button>
            <Button color="inherit" className="ms-auto" component={NavLink} to="/Login" onClick={() => {setAuthenticated(false); setCart([])}}><LogoutIcon/></Button></>: null
            // <><Button color="inherit" component={NavLink} to="/signupPage">Sign Up</Button> 
            // <Button color="inherit" component={NavLink} to="/Login">Login</Button> </>
          }
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
