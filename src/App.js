import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
    <div className="App">

        <Route exact path="">
          <Home></Home>
        </Route>
  </div>
  </Router>
  );
}
export default App;
