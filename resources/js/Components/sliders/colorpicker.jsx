import { HexColorPicker } from "react-colorful";
import { useState } from "react";


export default function ColorPicker({changeColor, changeSecondColor}) {
    const [color, setColor] = useState("#aabbcc");
    return (
        <div>
   <HexColorPicker color={color} onChange={setColor} />;
   {color}
   <button onClick={()=>changeColor(color) }>Change Color Bar 1</button>

   <button onClick={()=>changeSecondColor(color) }>Change Bar 2</button>
        </div>
    )
}

