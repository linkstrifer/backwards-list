import React from 'react';

const SelectComponent = (props) => {
  return (
    <div>
      <label htmlFor="input-order">
        Ordenar:
      </label>
      <select id="input-order" onChange={(event) => {
        props.handler(event.target.value);
      }}>
        <option defaultValue value="asc">a...z</option>
        <option value="des">z...a</option>
      </select>
    </div>
  )
}

export default SelectComponent;
