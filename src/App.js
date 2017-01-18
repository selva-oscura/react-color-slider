import React from 'react';
import './App.css';
import Header from './Header';
import ColorRanges from './ColorRanges';
import ColorSwatches from './ColorSwatches';

const App = React.createClass({
  getInitialState(){
    return{
      color: {      
        hue: 0,
        saturation: 50,
        lightness: 50,
        alpha: .5,
      }
    }
  },
  updateColour(e){
    let color = this.state.color;
    color[e.target.id] = e.target.value;
    this.setState(color);
  },
  render() {
    return (
      <div className="App">
        <Header />
        <ColorSwatches 
          hue={this.state.color.hue}
          saturation={this.state.color.saturation}
          lightness={this.state.color.lightness}
          alpha={this.state.color.alpha}
        />
        <ColorRanges 
          hue={this.state.color.hue}
          saturation={this.state.color.saturation}
          lightness={this.state.color.lightness}
          alpha={this.state.color.alpha}
          updateColour={this.updateColour}
        />
      </div>
    );
  }
});

export default App;
