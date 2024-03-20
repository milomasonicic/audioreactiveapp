import { useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Gradiantvalue ({title, min , max , gradientValue}) {

    const value = useState(0.5)

    return (
        <div>
            <h1>{title}</h1>
            <div className="w-[250px]">
            <Slider
            defaultValue={value}
            min={min}
            max={max}
            step={0.1}
            onChange={gradientValue}
          
            key="slider"
            
       
         />
            </div>
        </div>
    )
}