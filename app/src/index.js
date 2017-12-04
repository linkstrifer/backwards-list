import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const $rootElement = document.getElementById('backwards-list');
const { innerHTML } = $rootElement;

const app = (
  <App list={innerHTML} />
);

ReactDOM.render(app, $rootElement);
registerServiceWorker();
