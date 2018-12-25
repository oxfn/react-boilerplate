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

  componentDidMount() {
    this.update();
    this.interval = setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      date: new Date().toString(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <Block>
        <div style={{ lineHeight: '24px' }}>
          <img src={clockImage} alt="" width="24" height="24" style={{ margin: '0 12px -7px 0' }} />
          <span>
            It is
            <span className={global.important}>{date}</span>
            now
          </span>
        </div>
      </Block>
    );
  }
}
