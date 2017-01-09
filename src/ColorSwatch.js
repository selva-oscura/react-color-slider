import React from 'react';
import './ColorSwatch.css';

const ColorSwatch = ({hue, saturation, lightness, alpha}) => {
	let background = {
		backgroundColor: "hsla("+hue+", " + saturation + "%, " + lightness + "%, " + alpha + ")",
	};
	return(
		<div className="ColorSwatch" style={background}></div>
	)
};

export default ColorSwatch;
