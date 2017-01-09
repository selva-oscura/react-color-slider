import React from 'react';

const ColorRange = ({colourParameter, colourValue,  updateColour, step, min, max}) => {
	return(
		<div className="ColorRange">
			<p id='parameterDisplay'>{colourParameter.toUpperCase()}: {colourValue}</p>
			<input 
				id={colourParameter} 
				type="range" 
				step={step}
				min={min}
				max={max}
				value={colourValue}
				onChange={updateColour}
			/>
		</div>
	)
};

export default ColorRange;
