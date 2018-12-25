import React from 'react';
import { hot } from 'react-hot-loader/root';
import TimeDisplay from './blocks/TimeDisplay';
import AskServer from './blocks/AskServer';
import styles from './App.css';

const App = () => (
  <div className={styles.wrapper}>
    <h1>Hello, Reactive World!</h1>
    <TimeDisplay />
    <AskServer />
  </div>);

export default hot(App);
