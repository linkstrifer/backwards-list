import React from 'react';

const SearchInput = (props) => (
  <input
    placeholder="buscar"
    onInput={(event) => props.handler(event.target.value)}
    />
)

export default SearchInput;