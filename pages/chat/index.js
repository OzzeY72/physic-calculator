import React, {Component} from 'react';
import {Dimensions, Keyboard,AsyncStorage, } from "react-native";
import {MainPageView}  from '../../containers/chat';
//import AsyncStorage from '@react-native-community/async-storage';

export class ChatScreen extends Component {

  constructor(props) {
    super(props);
    this._retrieveData = this._retrieveData.bind(this);
    this.sendMassage = this.sendMassage.bind(this);
    this.deleteMassage = this.deleteMassage.bind(this);
    this.getMassages = this.getMassages.bind(this);
    this.state = { 
      height: Dimensions.get('window').height,
      author: 'anon',
      massage: '',
      time: '',
      data:'',
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      status:'',
    };
  }

  async Listener (){
    let response = await fetch('http://radiant-mesa-41191.herokuapp.com/massage');
    //let response = await fetch('46.175.250.105:5000/massage');
    let data = await response.json();
    console.log(data);
    if (data.length != this.state.data.length) this.setState({data:data})

    this.Listener();
  }

  componentDidMount(){
    this.getMassages();
    this._retrieveData();
    this.Listener();
   
  }
  componentWillMount(){
  	this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
	this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

	_keyboardDidShow(e) {
    	this.props.navigation.setParams({
        	keyboardHeight: e.endCoordinates.height,
        	normalHeight: Dimensions.get('window').height, 
        	shortHeight: Dimensions.get('window').height - e.endCoordinates.height, 
    	}); 
	}

  getMassages () {
    const { page, seed } = this.state;
    const url = `http://radiant-mesa-41191.herokuapp.com/massage`;
    //const url = `46.175.250.105:5000/massage`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });

  }

	_retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('author');
            if (value !== null) {
                // Our data is fetched successfully
                this.setState({author:value});
            }
        } catch (error) {
            // Error retrieving data
        }
    }

  deleteMassage = (massage) =>{
  	var body = 'id=' + encodeURIComponent(massage);
    const Http = new XMLHttpRequest();
    const url = `http://radiant-mesa-41191.herokuapp.com/delete`;
    //const url = `46.175.250.105:5000/delete`;
    Http.open('POST',url);
    Http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    Http.send(body);

  }
  sendMassage = () => {
    var body = 'massage=' + encodeURIComponent(this.state.massage) +
        '&author=' + encodeURIComponent(this.state.author);
    const Http = new XMLHttpRequest();
    const url = `http://radiant-mesa-41191.herokuapp.com/massage`;
    //const url = `46.175.250.105:5000/massage`;
    Http.open('POST',url);
    Http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    Http.send(body);
    this.setState({
      massage: '',
    });
  
  }
  /*async getUser(){
    try {
    const value = await AsyncStorage.getItem('name')
    if(value !== null) {
      this.state.author = value;
    }
  } catch(e) {
  }
  }
  */
  render() {
    return <MainPageView scope={this}/>
  }
}
