import '../App.css';
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login";
import Navbar from "./navbar";
import Home from "./home";
import Root from "./root";
import Footer from "./footer";
import { connect } from "react-redux";
import { handleRecieveCands } from '../actions/candidates';
import { handleRecieveThreads } from "../actions/threads";
import Threads from './threads';
import Signup from "./signup";


class App extends React.Component{
  state = {
    login:false
  }
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(handleRecieveCands());
    dispatch(handleRecieveThreads());
  }
  setSignin = e =>{
    this.setState({login:true});
  }
  setSignup = e =>{
    this.setState({login:false});
  }
  render() {
  let login = false;
  return (
    <div className="App">
        <Navbar setSignin={this.setSignin} setSignup={this.setSignup} />
        {!login? (
          this.state.login?(
            <Login />
          ):(
            <Signup />
          )
        ):(
        <Switch>
          <Route exact path="/">
            <Root />
            {/* {login && <Redirect to="/home" />} */}
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/threads">
            <Threads />
          </Route>
        </Switch>
        )}
        {console.log((new Navbar()))}
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
}

export default connect()(App);
