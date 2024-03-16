import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Canvas from '@/Components/audioreactive/canvas';
import Bars from '@/Components/audioreactive/bars';

export default function colorfulbars() {
    return (
       <div>
        <h1>Colorful bars</h1>
        <Bars></Bars>
       </div>
    );
}
