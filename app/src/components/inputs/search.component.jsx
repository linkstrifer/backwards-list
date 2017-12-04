import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = props => (
  <input
    placeholder="buscar"
    onInput={event => props.handler(event.target.value)}
  />
);

SearchInput.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default SearchInput;
