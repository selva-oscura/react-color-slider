import React from 'react';
import './App.css';
import Header from './Header';

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
      </div>
    );
  }
});

export default App;
