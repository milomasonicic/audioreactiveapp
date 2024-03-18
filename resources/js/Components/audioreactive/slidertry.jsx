import React, { useState, useRef} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
function Proba() {
  const [value, setValue] = useState(20);
  const divRef = useRef(null);

  const OnChangeEventTriggerd = (newValue) => {
    console.log("new Value", newValue);
    setValue(newValue);
  };

  return (
    <div className="App">
       <div ref={divRef} style={{ width: value, height: 120, backgroundColor: "black" }}>
        milo
        </div>
        <div className="w-[250px]">
        <Slider
        value={value}
        onChange={OnChangeEventTriggerd}
        step={10}
        min={0}
        max={500}
      />

        </div>    
    </div>
  );
}

export default Proba;