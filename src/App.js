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
        <div className="App-header">
          <h2>Color Slider</h2>
        </div>
        <p>{this.state.defaultHue}</p>
      </div>
    );
  }
});

export default App;
