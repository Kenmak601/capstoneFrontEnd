import React from 'react'
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} className='Text-Color'>
        {'Copyright © '}
          Ken Mak Social Media Capstone {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function HomePage() {
  return (
    <div><h1>Welcome to SportsMedia!</h1>
    
    <Button color="inherit" component={NavLink} to="/signupForm"><b className="Homepage-Button">Sign Up</b></Button>  
    <Button color="inherit" className="ms-auto" component={NavLink} to="/Login"><b className="Homepage-Button">Log In</b></Button> 
    
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  )
}
