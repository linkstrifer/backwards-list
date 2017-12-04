import React from 'react';
import PropTypes from 'prop-types';

// module imports

import ListComponent from './components/list/list.component';

const App = props => (
  <div className="App">
    <ListComponent list={props.list} />
  </div>
);

App.propTypes = {
  list: PropTypes.string.isRequired,
};

export default App;
