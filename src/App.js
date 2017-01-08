import React from 'react';
import './App.css';


const App = React.createClass({
  getInitialState(){
    return{
      defaultHue: 90,
    }
  },
  render() {
    return (
      <div className="App">
        <p>{this.state.defaultHue}</p>
      </div>
    );
  }
});

export default App;
