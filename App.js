import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Home  from './components/Home'
import LogIn from './components/LogIn'

export default class App extends React.Component {
  state = {
    showHome: false
  }

  render() {

    const { showHome } = this.state 

    if(showHome == true){
      return(
        <Home />
      )
    }else{
      return (
        <LogIn />
      )
    }
  }
}
