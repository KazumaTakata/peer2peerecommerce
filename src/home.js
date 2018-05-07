import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faShoppingCart  from '@fortawesome/fontawesome-free-solid/faShoppingCart'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {contractInstance, web3} from "./web3Instance";


class Home extends Component {

  constructor(props){
    super(props);
    this.state = { userList: []}
    console.log(this.props.params)


  }




  render() {
    return (
      <div className="App">
        home
      </div>
    );
  }
}

export default Home;
