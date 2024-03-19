import { useRef, useState } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function EditingSlider ({title, promena, min , max , OnChangeEventTriggerd}) {

    const value = useState(14)

    return (
        <div>
            <h1>{title}</h1>
            <div className="w-[250px]">
            <Slider
            defaultValue={value}
            min={min}
            max={max}
            onChange={OnChangeEventTriggerd}
            key="slider"
       
         />
            </div>

            <button onClick={()=>promena("milo promena") }>Change</button>
        </div>
    )
}