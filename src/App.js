import React, { useState, useEffect } from 'react';
import {Header} from './components/header'
import {SignUp} from './components/sign_up';
// import {SignIn} from './components/signin';
import { Login } from './components/login';
import { Home } from './components/home';
// import { About } from './components/about';
import { Logout} from './components/logout';
import { Profile } from './components/profile';
import { CreateTournament } from './components/createTournament';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {signUpFetch} from "./utils/index";
import {readUserFetch} from "./utils/index";
import {updateUserFetch} from "./utils/index";
import { tokenCheck } from "./utils";

const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    tokenCheck(setUser);
  }, []);

  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [listUser, setListUser] = useState();
  // // let updating = false;

  // const signUpHandler = async (e) => {
  //   e.preventDefault(); //stops the default reset rendering
  //   const returnValue = await signUpFetch(username, email, password);
  //   setUser(returnValue.user.username);
  // }

  // useEffect(() => {
  //   listingHandler();
  //   }, []);

  // const loginHandler = async (e) => {
  //   e.preventDefault();
  //   const return_details = await readUserFetch(username);
  //   setListUser(return_details.user.username);
  //   setEmail(return_details.user.email);
  // }





  return (
    <Router className="App">
      <div className='title'>
      <Header />
        <main>
          {/* <Routes>
            <Route exact path='/sign_up' element= {<SignUp user={user} setUser={setUser}/>}></Route>
            <Route  exact path="/"  element={<Home/>} />
            <Route path="/login"  element={<Login user={user} setUser={setUser}/>} />

            <Route path="/logout" element={<Logout user={user} setUser={setUser}/>} />
            <Route path="/profile" element={<Profile user={user}/>} />
            <Route path="/createTournament" element={<CreateTournament user={user}/>} />
          </Routes> */}
          <div className='login'>
            <Login /> 
          </div>
        </main>
        
        {/* <div className='login'>
          <SignUp /> 
        </div> */}

      </div>

      <div className='login'>
        <Login /> 

      </div>


    </Router>
  );
}

export default App;
