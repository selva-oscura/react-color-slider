import React from 'react';
import ColorSwatch from './ColorSwatch';

const ColorSwatches = ({hue}) => (
	<div className="ColorSwatches">
		<ColorSwatch
			hue={hue}
			key="1"
		/>
		<ColorSwatch
			hue={hue}
			key="2"
		/>
	</div>
);

export default ColorSwatches;