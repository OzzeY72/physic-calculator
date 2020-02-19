import React, {Component} from 'react';
import {MainPageView}  from '../../containers/settings';
//import AsyncStorage from '@react-native-community/async-storage';

export class SettingsScreen extends Component {

  constructor(props) {
    super(props);
    //this.storeData = this.storeData.bind(this);
    this.state = { 
      acceskey: 'Y789',
      author: '',
    };
  }

  /*storeData = async () => {
    try {
      await AsyncStorage.setItem('name', this.state.author)
    } catch (e) {
      // saving error
    }
  }*/

  render() {
    return <MainPageView scope={this}/>
  }
}
