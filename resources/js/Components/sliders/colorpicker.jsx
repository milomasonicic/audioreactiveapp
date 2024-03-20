
import { HexColorPicker } from "react-colorful";
import { Button } from 'flowbite-react';
import { useState } from "react";


export default function ColorPicker({changeColor, changeSecondColor, changeThirdColor}) {
    const [color, setColor] = useState("#aabbcc");
    return (
        <div className="w-[500px] border border-red-700" > 
            <div className="w-full mx-auto">
             <div>
                <HexColorPicker color={color} onChange={setColor} className="mx-auto" />
             </div>
             
                <h2 className="text-center"> Your chosen color: {color}</h2>
             
             
            </div> 

            <div className="w-full flex justify-center">

                <button type="button" onClick={()=>changeColor(color)}   class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Change Color Bar 1</button>
                <button type="button" onClick={()=>changeSecondColor(color)} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Change Color Bar 2</button>
                <button type="button" onClick={()=>changeThirdColor(color)} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Change Color Bar 3</button>
            
            </div>   
  

        </div>
    )
}

