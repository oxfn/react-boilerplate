import React from 'react';
import { hot } from 'react-hot-loader/root';
import TimeDisplay from './blocks/TimeDisplay';
import AskServer from './blocks/AskServer';
import global from './global.css';
import styles from './App.css';

class App extends React.Component
{
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Hello, Reactive World!</h1>
        <TimeDisplay />
        <AskServer />
      </div>);
  }
}

export default hot(App);
