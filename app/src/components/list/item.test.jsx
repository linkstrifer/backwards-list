import React from 'react';
import renderer from 'react-test-renderer';

import ItemComponent from './item.component';

test('Item snapshot', () => {
  const component = renderer.create(<ItemComponent label="test item" />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
