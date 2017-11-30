import React from 'react';
import renderer from 'react-test-renderer';

import SearchComponent from "./search.component";

test('Search snapshot', () => {
  const component = renderer.create(
    <SearchComponent />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})