import { useContext } from 'react';
import React, {useState, useEffect} from 'react'
import { CustomContext } from './Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';


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

export default function FriendsPage() {
    const { authenticated, setAuthenticated, setCurrentUserInfo, currentUserInfo } = useContext(CustomContext);

    //states for friends features
    const [friendListdata, setFriendListData] = useState ([]); // declare empty[] called friendListData and declare set state for the array
    const [openAddFriends, setOpenAddFriends] = React.useState(false);

    const [searchFriendsInput, setSearchFriendsInput] = useState ("");
    const [similarUserList, setSimilarUserList] = useState([])

    const [postIdToDelete, setPostIdToDelete] = useState("")

    const getFriendsList = async() => {
        const response = await fetch("http://localhost:4000/capstoneProject/showAllFriends?loggedInUser=" + currentUserInfo[0].username)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setFriendListData(json)
        }
        )
    }
    useEffect(() => {
        getFriendsList();
    }, [])

    const handleClickOpenAddFriends = () => { //function for onclick ADD FRIEND button to open up MUI dialog
        setOpenAddFriends(true);
      };
    
    const handleCloseAddFriends = () => { // function to close the dialog pop up after ADD FRIEND is successful
        setOpenAddFriends(false);
        setSimilarUserList([]);
    };

    const handleSearchFriendsSubmit = () => { // handle search friends button in mysql db
          
            
        fetch(`http://localhost:4000/capstoneProject/searchFriends?searchInput=${searchFriendsInput}`, {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
   
        }).then(res => {
          return res.json();
        }).then(response => { // if successful, below is where to type what happens next, i.e navigate to another page/show alert.
          console.log("User Found")
          console.log(response)
          setSimilarUserList(response) // fill the similarUserList Array with the response from the api call
          //response has all the users
          //we get the list of friends to the current userinfo 
          //any username in that list is a friend of kobe bs so it shouldnt show up in the similiaruserlist
          //so we filter it out
          //then we we setSimilarUerlist(filterResponse)

        })
         
    };

    //function that fetches all the currentuserifriends

    const handleAddFriendsSubmit = () => { // handle search friends button in mysql db
          
            
        fetch("http://localhost:4000/capstoneProject/addFriends", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({

            postId: postIdToDelete // this line is where this function gets the data from the form, similar to getelementbyid

          })
        }).then(res => {
          return res.json();
        }).then(response => { // if successful, below is where to type what happens next, i.e navigate to another page/show alert.
          console.log("friend Added")
          console.log(response)
          
        })      
    };

    const handleSearchFriendsContentChange = (event) => { // handles any changes from the POST TITLE textfield

        setSearchFriendsInput(event.target.value) // event.target.value is the same as getelementbyid, this function is set in "onchange" in the textbox
      
    };

    const addFriendFromSearchListHandler = (event, userNameFromSearch) => {
        event.preventDefault();
        fetch("http://localhost:4000/capstoneProject/addFriends", {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
  
                username: currentUserInfo[0].username, // currentUserInfo[0].username is the logged in user
                friendUserName: userNameFromSearch // this line is where this function gets the data from the form, similar to getelementbyid
  
              })
            }).then(res => {
              return res.json();
            }).then(response => { // if successful, below is where to type what happens next, i.e navigate to another page/show alert.
              console.log("Friend Added to DB")
              console.log(response)
              getFriendsList() // refresh the added friend list as the add friend button is pressed
            //   alert("You are now following " + userNameFromSearch)
            })
    };

  return (

    <div>
         <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                <h1>{currentUserInfo[0].username} Friends</h1>
                <hr />

                {/* BUTTON BELOW TO ADD FRIENDS */}
                <Button variant="outlined"  onClick={handleClickOpenAddFriends}>
                   <b className='Card-Button'>Find Friends</b>
                </Button>

                {/* DISPLAY CARD STARTS HERE */}
                { friendListdata[0]? 
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={3}>
                    {
                        friendListdata.map(friendList => 
                        (
                            <Grid item key={friendList.friendId} xs={12} sm={6} md={3}>

                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                                    {/* <CardContent sx={{ flexGrow: 1 }}>   
                                        {friendList.friendUsername}
                                    </CardContent> */}

                                    <CardActions className="Friend-Button">
                                    <Button component={NavLink} to={"/DisplayAllPostFriend/"+ friendList.friendUsername}><b className='Card-Button'>{friendList.friendUsername}</b></Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        ))
                    }
                    </Grid></Container>: null}
                </div>
                <div>
                {/* DIALOG BELOW USED AFTER THE "ADD FRIENDS" BUTTON IS PRESSED, DIALOG IS SIMILAR TO MODAL IN MUI*/}
                <Dialog open={openAddFriends} onClose={handleCloseAddFriends} > 
                  <DialogTitle>Search Friends</DialogTitle>
                <DialogContent sx={{ maxWidth: "xs" }}>
                    
                  {/* FORM FOR ADD FRIENDS STARTS HERE WITH THE BOX */}
                <Box component="form" noValidate onSubmit={handleAddFriendsSubmit} sx={{ mt: 3 }}> 

                  <DialogContentText>
                    Please Enter the Username of the Person You are searching
                  </DialogContentText>

                  <br/>
                  <TextField id="outlined-search" label="Search Friends" type="search" fullWidth onChange={handleSearchFriendsContentChange}
                    InputProps={{
                      endAdornment: 
                      (
                          <IconButton onClick={handleSearchFriendsSubmit}>
                            <SearchIcon />
                          </IconButton>
                      )
                    }}
                  />

                   <div>
                      {similarUserList.length > 0 ? similarUserList.map(userMatch => (
                        
                        <><h3>{userMatch.username}
                        <Button
                        type="submit"
                        onClick={(event) => {addFriendFromSearchListHandler(event, userMatch.username)}}
                        variant="contained"
                        sx={{ mt: 3, mb: 1 }}
                        style={{ background: '#2E3B55' }}

                      >Follow</Button></h3></>
                      ))
                      : null}
                     
                    </div> 
                    
                </Box>
                </DialogContent>

                </Dialog>

                </div>
            </div>  
        </div>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  )
}
