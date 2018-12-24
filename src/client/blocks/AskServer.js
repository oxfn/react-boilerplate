import React from 'react';
import axios from 'axios';
import cn from 'classnames';
import Block from '../Block';
import global from '../global.css';
import styles from './AskServer.css';

export default class AskServer extends React.Component {
  timeout = null;

  constructor() {
    super();
    this.state = {
      response: undefined,
      error: false,
    };
  }

  handleAsk = async () => {
    try {
      const { data } = await axios.get('/api/ask');
      this.setState({
        response: data,
        error: false,
      });
    } catch (err) {
      this.setState({
        response: err.message,
        error: true,
      });
    } finally {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.setState({
          response: null,
          error: false,
        });
        this.timeout = null;
      }, 1000);
    }
  };

  render() {
    const valueClass = cn(this.state.error ? global.important : null, styles.value);
    return (
      <Block>
        <button onClick={this.handleAsk}>Ask server</button>
        {this.state.response &&
          <span>
            <span className={styles.label}>Server says:</span>
            <strong className={valueClass}>{this.state.response}</strong>
          </span>
        }
      </Block>
    );
  }
}
