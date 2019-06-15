import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Home from './Container/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div >
      
       <Home />
      </div>
    );
  }
}
// style={{backgroundColor:'lightblue' }
render(<App />, document.getElementById('root'));
