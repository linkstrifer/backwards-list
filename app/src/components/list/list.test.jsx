import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListComponent from './list.component';


Enzyme.configure({ adapter: new Adapter() });

const testList = `<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item 5</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 6</li>
  </ul>
`;

test('List snapshot', () => {
  const component = renderer.create(<ListComponent list={testList} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
