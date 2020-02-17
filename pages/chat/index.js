import React, {Component} from 'react';
import {MainPageView}  from '../../containers/chat';

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

  componentDidMount(){
    this.getMassages();
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
  render() {
    return <MainPageView scope={this}/>
  }
}
