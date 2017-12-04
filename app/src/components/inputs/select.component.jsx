import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = props => (
  <div>
    <label
      htmlFor="input-order"
      style={{
        marginRight: '10px',
      }}
    >
      Ordenar:
    </label>
    <select
      id="input-order"
      onChange={(event) => {
        props.handler(event.target.value);
      }}
    >
      <option defaultValue value="asc">a...z</option>
      <option value="des">z...a</option>
    </select>
  </div>
);

SelectComponent.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default SelectComponent;
