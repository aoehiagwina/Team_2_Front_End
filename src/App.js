import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router className="App">
      <main>
        <Route>
        <h1>
          Hello World
        </h1>
        </Route>
      </main>
      

    </Router>
  );
}

export default App;
