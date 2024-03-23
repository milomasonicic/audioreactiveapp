import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Canvas from '@/Components/audioreactive/canvas';

import AudioAnalyzer2 from '@/Components/audioreactive/audioAnalizer2'

export default function an() {
    return (
       <div>
        <h1>Audio analyzer</h1>
        <div className='w-[1440px] mx-auto'>
           
            <AudioAnalyzer2></AudioAnalyzer2>

        </div>
       
       </div>
    );
}
