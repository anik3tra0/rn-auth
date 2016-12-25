import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

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
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
