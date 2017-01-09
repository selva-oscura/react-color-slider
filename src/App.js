import React from 'react';
import './App.css';
import Header from './Header';
import ColorRange from './ColorRange';

const App = React.createClass({
  getInitialState(){
    return{
      defaultHue: 90,
    }
  },
  render() {
    return (
      <div className="App">
        <Header />
        <p>{this.state.defaultHue}</p>
        <ColorRange />
      </div>
    );
  }
});

export default App;
