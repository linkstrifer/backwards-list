import React from 'react';
import renderer from 'react-test-renderer';

import SelectComponent from './select.component';

test('Select snapshot', () => {
  const component = renderer.create(
    <SelectComponent />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
