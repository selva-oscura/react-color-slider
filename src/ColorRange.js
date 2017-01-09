import React from 'react';

const ColorRange = ({hue, updateHue}) => {
	// console.log('hueValue', hue);
	return(
		<div className="ColorRange">
			<input 
				id="color" 
				type="range" 
				step="1" 
				min="0" 
				max="360" 
				value={hue}
				onChange={updateHue}
			/>
		</div>
	)
};

export default ColorRange;
