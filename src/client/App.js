import React, { Component } from 'react';
import styles from './App.css';

export default class App extends Component
{
  state = {
    date: new Date().toString(),
  }

  render() {
    return (<div>
      <h1>Hello, World!</h1>
      <p>It is {this.state.date} now</p>
    </div>)
  }
}

