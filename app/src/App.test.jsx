import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import App from './App';

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

test('App snapshot', () => {
  const component = renderer.create(<App list={testList} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App list={testList} />, div);

  ReactDOM.unmountComponentAtNode(div);
});
