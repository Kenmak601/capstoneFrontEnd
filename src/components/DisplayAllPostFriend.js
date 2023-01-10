import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Typography from '@mui/material/Typography';


function Copyright(props) { // copyright logo
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} className='Text-Color'>
        {'Copyright © '}
          Ken Mak Social Media Capstone {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function DisplayAllPostFriend() {

    let { username } = useParams() //  this line is the hook bring across the details for the username
    const [friendPost, setFriendPost] = useState([])

    async function fetchAPI() { // api call to get all friends name

        const response = await fetch("http://localhost:4000/capstoneProject/displayPostByFriendName?username=" + username)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setFriendPost(json)
            }
            )
    }
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div>
        <div className='container my-5 py-5'>
        <div className='row'>
            <div className='col-12 mb-5'>
            <h1>{username}'s Post</h1>
            <hr />
            {/* DISPLAY CARD STARTS HERE */}
            { friendPost[0]? 
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={3}>
                {
                    friendPost.map(post => 
                    (
                        <Grid item key={post.postId} xs={12} sm={12} md={12}>

                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} className='Card'>

                                <CardContent sx={{ flexGrow: 1 }} className='Card'>   
                                    <b>{post.username}</b>
                                    <hr/>
                                    <h2>{post.postTitle}</h2>
                                    <br/>
                                    <h2>{post.postContent}</h2>
                                    <hr/>
                                    {post.postDateTime.slice(0,10)} @ {post.postDateTime.slice(11,16)}
                                </CardContent>

                                <CardActions className='Card'>
                                    <IconButton aria-label="like">
                                        <ThumbUpOffAltIcon  className='Card-Button'/>
                                    </IconButton>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))
                }
                </Grid></Container>:<h1> {username} does not have any post yet</h1>}
            </div>
        </div>  
   </div>
   <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>

    )
}

