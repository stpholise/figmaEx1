import  { useState } from 'react';
import ReactSlider from 'react-slider';

function CustomSlider() {
  const [value, setValue] = useState(50);

  return (
    <div>
      <ReactSlider
        value={value}
        onChange={(val) => setValue(val)}
        min={0}
        max={100}
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
      />
      <p>Current Value: {value}</p>
    </div>
  );
}

export default CustomSlider;
