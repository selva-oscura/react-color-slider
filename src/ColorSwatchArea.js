import React from 'react';
import ColorSwatch from './ColorSwatch';
import ColorSwatchText from './ColorSwatchText';
import './ColorSwatchArea.css';

const ColorSwatchArea = ({hue, saturation, lightness, alpha, text}) => {
	return(
		<div className="ColorSwatchArea">
			<ColorSwatch
				hue={hue}
				saturation={saturation}
				lightness={lightness}
				alpha={alpha}
			/>
			<ColorSwatchText
				hue={hue}
				saturation={saturation}
				lightness={lightness}
				alpha={alpha}
				text={text}
			/>
		</div>
	)
};

export default ColorSwatchArea;
