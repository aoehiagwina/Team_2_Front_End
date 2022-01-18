import React, { useState } from 'react';
import {Header} from './components/header'
import {Sign_Up} from './components/sign_up';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <Router className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path='/sign_up' element= {<Sign_Up />}></Route>

        </Routes>

      </main>
      

    </Router>
  );
}

export default App;
