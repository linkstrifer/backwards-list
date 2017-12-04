import React from 'react';
import renderer from 'react-test-renderer';

import SelectComponent from './select.component';

const testHandler = () => {};

test('Select snapshot', () => {
  const component = renderer.create(<SelectComponent handler={testHandler} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
