import React from 'react';

const ColorSwatchText = ({hue, saturation, lightness, alpha, text}) => {
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
