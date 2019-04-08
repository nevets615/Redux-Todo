import React, { Component } from 'react';

import './App.css';
import {createStore} from 'redux';

const reducer = () => {
  return {
    todo: {}
  };
};

const store = createStore(reducer);


class App extends Component {
  render() {
    return (
      <div className="App">
    
      </div>
    );
  }
}

export default App;
