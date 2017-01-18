import React from 'react';
import ColorSwatch from './ColorSwatch';

const ColorSwatches = ({hue, saturation, lightness, alpha}) => (
	<div className="ColorSwatches">
		<ColorSwatch
			hue={hue}
			saturation="100"
			lightness="80"
			alpha="1"
			key="1"
		/>
		<ColorSwatch
			hue={hue}
			saturation={saturation}
			lightness={lightness}
			alpha={alpha}
			key="2"
		/>
	</div>
);

export default ColorSwatches;
