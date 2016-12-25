import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIeHQ9qnSPQWJCOxPefKvNMyvotDnfWVI',
      authDomain: 'auth-6af47.firebaseapp.com',
      databaseURL: 'https://auth-6af47.firebaseio.com',
      storageBucket: 'auth-6af47.appspot.com',
      messagingSenderId: '243552492634'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
