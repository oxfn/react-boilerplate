import React from 'react';
import PropTypes from 'prop-types';
import global from './global.css';

const Block = ({ children }) => (
  <div className={global.block}>{children}</div>
);

Block.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ).isRequired,
};

export default Block;
