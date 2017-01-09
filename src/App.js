import React from 'react';
import './App.css';
import Header from './Header';
import ColorRange from './ColorRange';
import ColorSwatches from './ColorSwatches';

const App = React.createClass({
  getInitialState(){
    return{
      hue: 90,
    }
  },
  updateHue(e){
    this.setState({hue:e.target.value});
  },
  render() {
    return (
      <div className="App">
        <Header />
        <p id='hueDisplay'>{this.state.hue}</p>
        <ColorSwatches 
          hue={this.state.hue}
        />
        <ColorRange
          hue={this.state.hue}
          updateHue={this.updateHue}
        />
      </div>
    );
  }
});

export default App;
