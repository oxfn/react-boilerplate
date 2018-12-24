import React from 'react';
import global from './global.css';

export default (props) => (
  <div>
    <div className={global.block}>{props.children}</div>
  </div>
);
