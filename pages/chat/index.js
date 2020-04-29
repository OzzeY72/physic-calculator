import React, {Component} from 'react';
import {MainPageView}  from '../../containers/chat';
//import AsyncStorage from '@react-native-community/async-storage';

export class ChatScreen extends Component {

  constructor(props) {
    super(props);
    this.sendMassage = this.sendMassage.bind(this);
    this.getMassages = this.getMassages.bind(this);
    this.state = { 
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
    let data = await response.json();
    console.log(data);
    if (data.length != this.state.data.length) this.setState({data:data})

    this.Listener();
  }

  componentDidMount(){
    this.getMassages();
    this.Listener();
  }

  getMassages () {
    const { page, seed } = this.state;
    const url = `http://radiant-mesa-41191.herokuapp.com/massage`;
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
  sendMassage = () => {
    var body = 'massage=' + encodeURIComponent(this.state.massage) +
        '&author=' + encodeURIComponent(this.state.author);
    const Http = new XMLHttpRequest();
    const url = `http://radiant-mesa-41191.herokuapp.com/massage`;
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
