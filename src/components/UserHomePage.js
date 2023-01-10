import { useContext } from 'react';
import React, {useState, useEffect} from 'react'
import { CustomContext } from './Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
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


export default function UserHomePage() {

    const { authenticated, setAuthenticated, setCurrentUserInfo, currentUserInfo } = useContext(CustomContext);
    const [displayAllFriendPost, setdisplayAllFriendPost] = useState ([]); // declare empty[] called friendListData and declare set state for the array

    const displayAllFriendPostList = async() => {
        const response = await fetch("http://localhost:4000/capstoneProject/displayAllFriendsPost?loggedInUser=" + currentUserInfo[0].username)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setdisplayAllFriendPost(json)
        })
    }
    useEffect(() => {
        displayAllFriendPostList();
    }, [])


  return (
    <div>
        <div className='container my-5 py-5'>
        <div className='row'>
            <div className='col-12 mb-5'>
            <h1>{currentUserInfo[0].username} Friends Post</h1>
            <hr />
            {/* DISPLAY CARD STARTS HERE */}
            { displayAllFriendPost[0]? 
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={3}>
                {
                    displayAllFriendPost.map(displayFriendPost => 
                    (
                        <Grid  item key={displayFriendPost.postId} xs={12} sm={12} md={12}>

                            <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                                <CardContent sx={{ flexGrow: 1 }} className='Card'>   
                                    <b>{displayFriendPost.username}</b>
                                    <hr/>
                                    <h2>{displayFriendPost.postTitle}</h2>
                                    <br/>
                                    <h2>{displayFriendPost.postContent}</h2>
                                    <hr/>
                                    {displayFriendPost.postDateTime.slice(0,10)} @ {displayFriendPost.postDateTime.slice(11,16)}
                                </CardContent>
                                
                                <CardActions className='Card'>
                                    <IconButton aria-label="like" >
                                        <ThumbUpOffAltIcon className='Card-Button'/>
                                    </IconButton>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))
                }
                </Grid></Container>: <h1>Start adding friends to view their posts</h1>}
            </div>
        </div>  
   </div>
   <Copyright sx={{ mt: 8, mb: 4 }} />
</div>
  )
}
