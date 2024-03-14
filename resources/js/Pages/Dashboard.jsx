import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Canvas2 from '@/Components/audioreactive/canvas2';
import LoadSound from '@/Components/audioreactive/loadaudio';
import Newtry from '@/Components/audioreactive/newtry'
import Num from '@/Components/audioreactive/num2'


/*
 <Newtry></Newtry>
*/ 

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                   <h1>hi</h1>

                  
                  <Num></Num>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
