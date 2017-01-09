import React from 'react';
import './App.css';
import Header from './Header';
import ColorRange from './ColorRange';
import ColorSwatches from './ColorSwatches';

const App = React.createClass({
  getInitialState(){
    return{
      hue: 0,
      saturation: 50,
      lightness: 50,
      alpha: .5,
    }
  },
  updateColour(e){
    let state = this.state;
    state[e.target.id] = e.target.value;
    this.setState(state);
  },
  render() {
    return (
      <div className="App">
        <Header />
        <ColorSwatches 
          hue={this.state.hue}
          saturation={this.state.saturation}
          lightness={this.state.lightness}
          alpha={this.state.alpha}
        />
      </div>
    );
  }
});

export default App;
