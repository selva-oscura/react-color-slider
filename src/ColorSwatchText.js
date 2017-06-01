import React from 'react';
// import './ColorSwatchText.css';

const ColorSwatchText = ({hue, saturation, lightness, alpha, text}) => {
	let background = {
		backgroundColor: "hsla("+hue+", " + saturation + "%, " + lightness + "%, " + alpha + ")",
	};
	return(
			<div className="ColorSwatchText">
				<p>
					{text}<br />
					HSLA: ({hue}, {saturation}%, {lightness}%, {alpha})
				</p>
			</div>
	)
};

export default ColorSwatchText;
