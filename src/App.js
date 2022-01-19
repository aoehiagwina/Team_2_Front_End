import React, { useState } from 'react';
import {Header} from './components/header'
import {SignUp} from './components/sign_up';
import { Login } from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {signUpFetch} from "./utils/index";
import {readUserFetch} from "./utils/index";
import {updateUserFetch} from "./utils/index";

const App = () => {

  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [listUser, setListUser] = useState();
  // let updating = false;

  const signUpHandler = async (e) => {
    e.preventDefault(); //stops the default reset rendering
    const returnValue = await signUpFetch(username, email, password);
    setUser(returnValue.user.username);
  }

  // useEffect(() => {
  //   listingHandler();
  //   }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    const return_details = await readUserFetch(username);
    setListUser(return_details.user.username);
    setEmail(return_details.user.email);
  }

  const updateHandler = async (e) => {
    e.preventDefault();
    const update_details = await updateUserFetch(username, email);
    setUsername(update_details.username);
    setEmail(update_details.email);
  }




  return (
    <Router className="App">
      <div>
        <Header />
        <main>
          <Routes>
            <Route exact path='/sign_up' element= {<SignUp />}></Route>

          </Routes>

        </main>
      
      </div>

      <div>
        <Login returning_user={listUser}
        user_email={email} 
        login_Handler={loginHandler}
        set_Username={setUsername}
        set_Password={setPassword} />
      </div>


    </Router>
  );
}

export default App;
