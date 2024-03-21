import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

const RotationSlider = () => {
    return (
        <div   >

            <CircularSlider  
                onChange={ value => { console.log(value); } }
            
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