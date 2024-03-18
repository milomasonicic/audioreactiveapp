import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Canvas from '@/Components/audioreactive/canvas';
import Bars from '@/Components/audioreactive/bars';

import Pokusaj from '@/Components/audioreactive/audioAnalizer';

export default function colorfulbars() {
    return (
       <div>
        <h1>Colorful bars</h1>
        <div className='w-[500px]'>
           <Bars></Bars>
        </div>
       </div>
    );
}
