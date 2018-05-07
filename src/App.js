import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faShoppingCart  from '@fortawesome/fontawesome-free-solid/faShoppingCart'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserList from "./userList";
import ProductList from "./productList";
import Home from "./home"
let web3;

class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="header"><div className="headerIcon"> <FontAwesomeIcon icon={faShoppingCart} />  p2pE </div>
      <div><Link to='/userlist'>Userlist</Link></div>
      <div><Link to='/home'>Home</Link></div>
      </div>
        <Switch>
          <Route exact path='/userlist' component={UserList}/>
          <Route  path='/products/:userId' component={ProductList}/>
          <Route  path='/home' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
