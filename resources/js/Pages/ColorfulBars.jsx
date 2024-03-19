import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Canvas from '@/Components/audioreactive/canvas';
import Bars from '@/Components/audioreactive/bars';

import Pokusaj from '@/Components/audioreactive/audioAnalizer';

export default function colorfulbars() {
    return (
       <div className='max-w-container mx-auto border border-red-700'>
        <h1>Colorful bars</h1>
        
           <Bars></Bars>
        
       </div>
    );
}
