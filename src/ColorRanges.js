import React from 'react';
import ColorRange from './ColorRange';

const ColorRanges = ({hue, saturation, lightness, alpha, updateColour}) => (
	<div id="ColorRanges">
    <ColorRange
      colourParameter="hue"
      colourValue={hue}
      updateColour={updateColour}
      step="1"
      min="0"
      max="360"
    />
    <ColorRange
      colourParameter="saturation"
      colourValue={saturation}
      updateColour={updateColour}
      step="1"
      min="0"
      max="100"
    />
    <ColorRange
      colourParameter="lightness"
      colourValue={lightness}
      updateColour={updateColour}
      step="1"
      min="0"
      max="100"
    />
    <ColorRange
      colourParameter="alpha"
      colourValue={alpha}
      updateColour={updateColour}
      step=".01"
      min="0"
      max="1"
    />
	</div>
);

export default ColorRanges;
