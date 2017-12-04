import React from 'react';
import PropTypes from 'prop-types';

const ItemComponent = props => (
  <li>
    {props.label}
  </li>
);

ItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ItemComponent;
