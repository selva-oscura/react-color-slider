import React from 'react';
import ColorSwatchArea from './ColorSwatchArea';

const ColorSwatchAreas = ({hue, saturation, lightness, alpha}) => (
	<div className="ColorSwatches">
		<ColorSwatchArea
			hue={hue}
			saturation="100"
			lightness="50"
			alpha="1"
			key="1"
			text="Hue Only"
		/>
		<ColorSwatchArea
			hue={hue}
			saturation={saturation}
			lightness={lightness}
			alpha={alpha}
			key="2"
			text="All Fields"
		/>
	</div>
);

export default ColorSwatchAreas;
