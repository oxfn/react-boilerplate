import React from 'react';
import Block from '../Block';
import global from '../global.css';
import clockImage from '../images/clock.png';

export default class TimeDisplay extends React.Component {
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
    return (
      <Block>
        <div style={{ lineHeight: '24px' }}>
          <img src={clockImage} alt="" width="24" height="24" style={{ margin: '0 12px -7px 0' }}/>
          <span>It is <span className={global.important}>{this.state.date}</span> now</span>
        </div>
      </Block>
    );
  }
}
