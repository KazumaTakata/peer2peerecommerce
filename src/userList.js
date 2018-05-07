import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faShoppingCart  from '@fortawesome/fontawesome-free-solid/faShoppingCart'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {contractInstance, web3} from "./web3Instance";


class UserList extends Component {

  constructor(props){
    super(props);
    this.state = { userList: []}
  }

  componentDidMount(){

    contractInstance.methods.getPeerList().call().then( (user) => {
      console.log(user)
      let userOBj = [];
      for(let i=0; i<user[0].length; i++){
        userOBj.push( { addr: user[0][i], name: user[1][i] } )
      }
      this.setState({
        userList: userOBj
      })
    })
    web3.eth.getAccounts().then(accounts => {
      contractInstance.methods.addPeerList( accounts[0], web3.utils.fromAscii("takata") ).send({from : accounts[0]})
    });

    // contractInstance.methods.addPeerList( "" )

  }

  renderUser(){
    const userList = this.state.userList.map( (user) => {
        return  <li><Link to={`products/${user.addr}`}>{ web3.utils.hexToString(user.name)}</Link> <div>{ user.addr}</div></li>
        } )
    return userList
  }

  render() {
    return (
      <div className="App">
        <ul>{this.renderUser()}</ul>
      </div>
    );
  }
}

export default UserList;
