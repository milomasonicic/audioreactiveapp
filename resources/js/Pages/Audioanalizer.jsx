import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import AudioAnalyzer from '@/Components/audioreactive/audioAnalizer';

export default function an() {
    return (
       <div>
        <h1>Audio analyzer</h1>
        <div className='w-[1440px] mx-auto'>
            <AudioAnalyzer></AudioAnalyzer>

        </div>
       
       </div>
    );
}
