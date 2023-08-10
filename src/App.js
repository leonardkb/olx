import React ,{useEffect,useContext}from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Components/Login/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';
import Post from './Store/PostContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './Store/FirebaseContext';

function App() {
  const {setuser}= useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setuser(user)
    })
  })
  return (
    <div>
<Post>
      <Router>
        <Route exact path='/'>
        <Home /> 
        </Route>
        <Route path='/signup'>
        <Signup  /> 
        </Route>
        <Route path='/login'>
        <Login  /> 
        </Route>
        <Route path='/create'>
        <Create  /> 
        </Route>
        <Route path='/view'>
        <View  /> 
        </Route>
      </Router>
     
      </Post>
    </div>
  );
}

export default App;
