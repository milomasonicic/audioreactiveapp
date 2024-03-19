
import { HexColorPicker } from "react-colorful";
import { Button } from 'flowbite-react';
import { useState } from "react";


export default function ColorPicker({changeColor, changeSecondColor}) {
    const [color, setColor] = useState("#aabbcc");
    return (
        <div className="w-[500px] border border-red-700" > 
            <div className="w-full mx-auto">
             <div>
                <HexColorPicker color={color} onChange={setColor} className="mx-auto" />
             </div>
             
                <h2 className="text-center"> Your chosen color: {color}</h2>
             
             
            </div> 

            <div className="w-full flex justify-between">

                <Button color="gray" onClick={()=>changeSecondColor(color) }>Change Color Bar 1</Button>
                <Button color="gray" onClick={()=>changeSecondColor(color)}>Change Color Bar 2</Button>
            
            </div>   
  

        </div>
    )
}

