import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import AudioAnalyzer3 from '@/Components/audioreactive/audioAnalizer3';

export default function an() {
    return (
       <div>
        <h1>Audio analyzer</h1>
        <div className='w-[1440px] mx-auto'>
            <AudioAnalyzer3></AudioAnalyzer3>

        </div>
       
       </div>
    );
}
