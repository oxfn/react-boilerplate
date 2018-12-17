import React, { Component } from 'react';
import styles from './App.css';

export default class App extends Component
{
  constructor() {
    super();
    this.interval = null;
    this.state = {
    };
  }

  update = () => {
    this.setState({
      date: new Date().toString(),
    });
  }

  componentDidMount() {
    this.update();
    this.interval = setInterval(this.update, 1000);
  }

  render() {
    return (<div>
      <h1>Hello, Porg!</h1>
      <p>It is {this.state.date} now</p>
    </div>)
  }
}

