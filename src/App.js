import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ButtonAppBar from './components/navBar';
import SignIn from './components/LoginPage';
import ShowAllProfilePost from './components/userProfiles';
import SignUpForm from './components/signupForm';
import FriendsPage from './components/FriendsPage';
import UserHomePage from './components/UserHomePage';
import DisplayAllPostFriend from './components/DisplayAllPostFriend';
import Marketplace from './components/Marketplace';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import HomePage from './components/HomePage';



function App() {
  return (
    <div className="App">
     
      <ButtonAppBar/>
      <Routes>
      <Route path="/" element = {<HomePage/>}/>
      <Route path="/signUpForm" element = {<SignUpForm/>}/>
      <Route path="/userProfiles" element = {<ShowAllProfilePost/>}/>
      <Route path="/Login" element = {<SignIn/>}/>
      <Route path="/FriendsPage" element = {<FriendsPage/>}/>
      <Route path="/UserHomePage" element = {<UserHomePage/>}/>
      <Route path="/DisplayAllPostFriend/:username" element = {<DisplayAllPostFriend/>}/>
      <Route path="/Marketplace" element = {<Marketplace/>}/>
      <Route path="/cart" element = {<Cart/>}/>
      <Route path="/checkout" element = {<Checkout/>}/>

      </Routes>
      {/* <BasicCard/> */}
      {/* <ShowAllProfilePost/> */}
      
      {/* <SignInSide/> */}
      {/* <SignIn/> */}
      
      
      
    </div>
  );
}

export default App;
