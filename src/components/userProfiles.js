import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import  { CustomContext } from './Context';
import "../App.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

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

function ShowAllProfilePost() {
    const [data, setData] = useState ([]); 
    const [postTitle, setPostTitle] = useState (""); // set initial state for postTitle content from new post form
    const [postContent, setPostContent] = useState (""); // set initial state for postContent from new post form
    const [postId, setPostId] = useState("");
    const [editTitle, setEditPostTitle] = useState (""); // set initial state for Edit Title content from edit post form
    const [editContent, setEditPostContent] = useState (""); // set initial state for Edit Content from edit post form
    const [openCreate, setOpenCreate] = React.useState(false);
    const [openEdit, setOpenEditPost] = React.useState(false);
 
    const [postIdToDelete, setPostIdToDelete] = useState("")
    const { authenticated, setAuthenticated, setCurrentUserInfo, currentUserInfo } = useContext(CustomContext);


    const handleClickOpenNewPost = () => { //function for onclick create new post button to open up MUI dialog
      setOpenCreate(true);
    };
  
    const handleCloseNewPost = () => { // function to close the dialog pop up after new post is successful
      setOpenCreate(false);
    };

    const handleClickOpenEditPost = () => { // function for onclick edit post button to open up MUI dialog
      setOpenEditPost(true);
    };
  
    const handleCloseEditPost = () => { // function for the onlick edit post button to close after successful edit
      setOpenEditPost(false);
    };

    const handleNewPostSubmit = (event) => { // function to add the new post form content into mysql db
      event.preventDefault();
     
        const data = new FormData(event.currentTarget);
       
          fetch("http://localhost:4000/capstoneProject/addPost", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              postTitle: postTitle, // this line is where this function gets the data from the form, similar to getelementbyid
              username: currentUserInfo[0].username,
              postContent: postContent // this line is where this function gets the data from the form, similar to getelementbyid

            })
          }).then(res => {
            return res.json();
          }).then(response => { // if successful, below is where to type what happens next, i.e navigate to another page/show alert.
            console.log("Successfully added new post")
            console.log(response)
            handleCloseNewPost()
            getProductsData()
            
            
          })
           
      };

      const handleEditPostSubmit = (event) => { // handle change for edit post to change in mysql db
        event.preventDefault();
       
          const data = new FormData(event.currentTarget);
         
            fetch("http://localhost:4000/capstoneProject/editPost", {
              method: "PUT",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                postTitle: editTitle, // this line is where this function gets the data from the form, similar to getelementbyid
                postId: postId,
                postContent: editContent // this line is where this function gets the data from the form, similar to getelementbyid
  
              })
            }).then(res => {
              return res.json();
            }).then(response => { // if successful, below is where to type what happens next, i.e navigate to another page/show alert.
              console.log("Successfully updated")
              console.log(response)
              handleCloseEditPost()
              getProductsData()
              
              
            })
             
        };
        useEffect(() => {
          if ((postIdToDelete) !== ""){
            console.log("useEffect block calling delete submit" + postIdToDelete)
            handleDeletePostSubmit();
          } else {
            console.log("inside use effect deleting else block postIdToDelete not set correctily from button click yet")
          }
        }, [postIdToDelete])

        const handleDeletePostSubmit = () => { // handle change for edit post to change in mysql db
          
              // console.log(postIdToDelete)
              fetch("http://localhost:4000/capstoneProject/deletePost", {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                  postId: postIdToDelete // this line is where this function gets the data from the form, similar to getelementbyid

                })
              }).then(res => {
                return res.json();
              }).then(response => { // if successful, below is where to type what happens next, i.e navigate to another page/show alert.
                console.log("Post Delete Successful")
                console.log(response)
                getProductsData()
                // alert("Post has been deleted")
  
              })
               
          };       

    const handlePostTitleChange = (event) => { // handles any changes from the POST TITLE textfield

      setPostTitle(event.target.value) // event.target.value is the same as getelementbyid, this function is set in "onchange" in the textbox
    
    };

    const handlePostContentChange = (e) => {

      setPostContent(e.target.value) // setPostContent is the const change variable declared first line in function

    }

    const handleEditPostTitleChange = (event) => { // handles any changes from the POST TITLE textfield

      setEditPostTitle(event.target.value) // event.target.value is the same as getelementbyid, this function is set in "onchange" in the textbox
    
    };

    const handleEditPostContentChange = (event) => { // handles any changes from the POST TITLE textfield

      setEditPostContent(event.target.value) // event.target.value is the same as getelementbyid, this function is set in "onchange" in the textbox
    
    };

    const handleEditButton = (currentCardTitle, currentCardContent, currentPostId) => { // handles any changes from the POST TITLE textfield

      setPostTitle(currentCardTitle) // event.target.value is the same as getelementbyid, this function is set in "onchange" in the textbox
      setPostContent(currentCardContent)
      setPostId(currentPostId)
      console.log("handleEditButton called")
      handleClickOpenEditPost()
    
    };
    
    const handleDeleteButton = (currentPostId) => { // handles any changes from the POST TITLE textfield

      setPostIdToDelete(currentPostId)// event.target.value is the same as getelementbyid, this function is set in "onchange" in the textbox
      console.log("delete button called")
    
    };

 
    const getProductsData = async() => { // function to get all data from userpost
        const response = await fetch("http://localhost:4000/capstoneProject/filterByUsername?username=" + currentUserInfo[0].username)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setData(json)

        }
        )
    }
    useEffect(() => {
      // console.log(currentUserInfo)
      getProductsData();
    }, [])


  return (
    <div>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    {/* <h1 className='display-6 fw-bolder text-center'>{currentUserInfo.length !== 0 ? currentUserInfo[0].username : "hi user"}</h1> */}
                    <h1>{currentUserInfo[0].username} Posts</h1>
                    <hr />

                    {/* BUTTON BELOW TO CREATE NEW POST */}
                    <Button variant="outlined" onClick={handleClickOpenNewPost}>
                      <b className='Card-Button'>Create New Post</b>
                    </Button>
                   
                   {/* DISPLAY USING CARDS STARTS BELOW, IF DATA[0] IS NOT EMPTY, DISPLAY DATA IN CARDS */}
                    {data[0]?
                     <Container sx={{ py: 8 }} maxWidth="md">
                     <Grid container spacing={3}>
                       {
                         data.map(userPost => 
                         (
                          <Grid item key={userPost.postId} xs={12} sm={12} md={12}>
         
                            <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
         
                              {/* <CardMedia/> DO NOT HAVE USE FOR THIS YET, WILL USE IN VERSION 2.0 TO ALLOW IMAGE UPLOAD*/ }
         
                              <CardContent sx={{ flexGrow: 1 }} className='Card'>
                                    <b>{userPost.username}</b><hr/><h2>{userPost.postTitle}</h2><br/><h2>{userPost.postContent}</h2><hr/>{userPost.postDateTime.slice(0,16).replace('T', ' @ ')}
                              </CardContent>
            
                              <CardActions className='Card'>
                                
                                  <IconButton aria-label="edit" onClick={ () => handleEditButton(userPost.postTitle, userPost.postContent, userPost.postId)}>
                                    <EditIcon className='Card-Button'/>
                                  </IconButton>

                                  
                                  {/* <Button variant="outlined" onClick={ () => handleEditButton(userPost.postTitle, userPost.postContent, userPost.postId)}> 
                                        Edit Post
                                  </Button> */}

                                  <IconButton aria-label="delete" onClick={ () => handleDeleteButton(userPost.postId)}>
                                    <DeleteIcon  className='Card-Button'/>
                                  </IconButton>   
                              </CardActions>

                            </Card>
                          </Grid>
                         ))
                        }
                   </Grid>
                 </Container>: null}
                
                <div className="profilePage">
                
                
                {/* DIALOG BELOW USED AFTER THE "CREATE NEW POST" BUTTON IS PRESSED, DIALOG IS SIMILAR TO MODAL IN MUI*/}
                <Dialog open={openCreate} onClose={handleCloseNewPost} >
                  <DialogTitle>New Post</DialogTitle>
                <DialogContent sx={{ maxWidth: "xs" }}>
                    
                  {/* FORM FOR NEW POST STARTS HERE WITH THE BOX */}
                  <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleNewPostSubmit}> 

                  <DialogContentText>
                    Please Create New Post Below with Title and Content
                  </DialogContentText>

                  <br/>
                  <TextField
                      id="outlined-multiline-flexible"
                      label="Post Title"
                      multiline
                      maxRows={4}
                      fullWidth
                      onChange={handlePostTitleChange}
                  />
                  <br/>
                  <br/>
                  <br/>
                  <TextField
                      id="outlined-multiline-static"
                      label="Post Content"
                      multiline
                      rows={4}
                      defaultValue={postContent}
                      fullWidth
                      onChange={handlePostContentChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}
                    style={{ background: '#2E3B55' }}
                  >
                    Create New Post
                  </Button>
                </Box>
                </DialogContent>

                </Dialog>


                {/* EDIT POST DIALOG STARTS HERE */}
                {/* DIALOG IS SIMILAR TO MODAL IN MUI, USED AFTER THE "CREATE EDIT POST" BUTTON IS PRESSED */}
                <Dialog open={openEdit} onClose={handleCloseEditPost} >
                  <DialogTitle>Edit Post</DialogTitle>
                  <DialogContent sx={{ maxWidth: "xs" }}>
                    
                  {/* FORM FOR EDIT POST STARTS HERE WITH THE BOX */}
                  <Box component="form" noValidate onSubmit={handleEditPostSubmit} sx={{ mt: 3 }}> 

                  <DialogContentText>
                    Please Edit Your Post Below with New Title and Content
                  </DialogContentText>

                  <br/>
                  <TextField
                      id="outlined-multiline-flexible"
                      label="Post Title"
                      multiline
                      maxRows={4}
                      fullWidth
                      defaultValue={postTitle}
                      onChange={handleEditPostTitleChange}
                  />
                  <br/>
                  <br/>
                  <br/>
                  <TextField
                      id="outlined-multiline-static"
                      label="Post Content"
                      multiline
                      rows={4}
                      defaultValue={postContent}
                      fullWidth
                      onChange={handleEditPostContentChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 1 }}
                    style={{ background: '#2E3B55' }}
                  >
                   Submit Edit Post
                  </Button>
                </Box>
                </DialogContent>

                </Dialog>

              </div>
                    
              


                </div>
            </div>
            
        </div>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  )
}
export default ShowAllProfilePost