import React from 'react';
import { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

const RotationSlider = ({changeAngle}) => {

    const [value, changeValue] = useState(20);
    //const slider = useRef(null);
    return (
        <div   >

            <CircularSlider  
                onChange={changeValue(value)}
            
            labelColor="#005a58"
            knobColor="#005a58"
            progressColorFrom="red"
            progressColorTo="black"
            progressSize={14}
            trackColor="#eeeeee"
            trackSize={24}
            width={120}
            dataIndex={10}
            />

        </div>
    )
};

export default RotationSlider;