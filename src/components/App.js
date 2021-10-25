import '../App.css';
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login";
import Navbar from "./navbar";
import Home from "./home";
import Thrds from './threads';
import Root from "./root";
import Footer from "./footer";

function App() {
  let {login} = true;
  return (
    <div className="App">
        <Navbar />
        {/* {!login? (<Login />): */}
        <Switch>
          <Route exact path="/">
            <Root />
            {/* {login && <Redirect to="/home" />} */}
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
