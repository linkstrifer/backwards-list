import React from 'react';
import renderer from 'react-test-renderer';

import SearchComponent from './search.component';

const testHandler = () => {};

test('Search snapshot', () => {
  const component = renderer.create(<SearchComponent handler={testHandler} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
