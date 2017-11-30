import React from 'react';
import renderer from 'react-test-renderer';

import ItemComponent from './item.component';

test('Item load', () => {
  const component = renderer.create(
    <ItemComponent label="test item" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
