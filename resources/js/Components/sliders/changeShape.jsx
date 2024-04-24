import { useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function ShapeSlider ({title, min , max , changeShape }) {

    const value = useState(14)
    console.log(value)
    return (
        <div>
            <h1>{title}</h1>
           
            <div className="w-[225px] md:w-[250px]">
            <Slider
            defaultValue={value}
            min={min}
            max={max}
            onChange={changeShape}
            key="slider"
       
         />
            </div>
        </div>
    )
}