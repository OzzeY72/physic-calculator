import React, {Component} from 'react';
import {MainPageView}  from '../../containers/create';

export class CreateScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,

    };
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://radiant-mesa-41191.herokuapp.com/json/formulas.json`;
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
  };

  /*getText(){
    setState({str: 'aaaaaaa'});
  }*/
  render() {
    return <MainPageView scope={this}/>
  }
}
