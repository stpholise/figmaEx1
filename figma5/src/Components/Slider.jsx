import  { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RcSlider = () => {
  // State to keep track of the current slider value
  const [sliderValue, setSliderValue] = useState(50);

  // Handler to update the state when slider value changes
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div style={{ margin: "auto 50px" , width: '200px' }}>
      <Slider
        min={0}
        max={100}
        value={sliderValue} // Controlled value
        onChange={handleSliderChange} // Callback when value changes
        styles={{

          track:{ backgroundColor: "#4CAF50", height: "5px" , display:'flex' , alignItems: 'center'},
          rail:{ backgroundColor: "#ddd", height: "5px" },
          handle:{
            borderColor: "#000",
            height: "10px",
            width: "10px",
            backgroundColor: "#000",
                 
          }
        }}
      />
      <p>Current Value: {sliderValue}</p>
    </div>
  );
};

export default RcSlider;
