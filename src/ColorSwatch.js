import React from 'react';
import './ColorSwatch.css';

const ColorSwatch = ({hue}) => {
	console.log('hue?', hue)
	let background = {
		backgroundColor: "hsla("+hue+", 80%, 80%, 1)"
	};
	console.log('colour?', background);
	return(
		<div className="ColorSwatch" style={background}>

		</div>
	)
};

export default ColorSwatch;