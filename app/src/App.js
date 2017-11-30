import React, { Component } from 'react';
import './App.css';

// module imports

import ListComponent from './components/list/list.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListComponent list={this.props.list} />
      </div>
    );
  }
}

export default App;
