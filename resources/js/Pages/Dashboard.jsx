import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { Button } from '@mui/base';


import Hero from '@/Components/landingpage/hero'
import Light from '@/Components/landingpage/lightsection'
import Dark from '@/Components/landingpage/darksection'
import Newsletter from '@/Components/landingpage/newsletter'

/*import Canvas2 from '@/Components/audioreactive/canvas2';
import LoadSound from '@/Components/audioreactive/loadaudio';
import Newtry from '@/Components/audioreactive/newtry copy'
import Num from '@/Components/audioreactive/numbers'
import Smile from '@/Components/audioreactive/audioCanvas'
import Last from '@/Components/audioreactive/lastaudio'
import Pokusaj from '@/Components/audioreactive/audioAnalizer'*/



/*
 <Newtry></Newtry>

ovaj num je audio reactive component sa brojevim
 <Num></Num>
  <Num></Num>
   <Newtry></Newtry>
                  <Smile></Smile>
                  <Last></Last>
                   <Pokusaj></Pokusaj>
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
                   <Hero></Hero>
                   <Light></Light>
                   <Dark></Dark>
                   <Newsletter></Newsletter>
                  
                 
                </div>
               

            </div>

            
        </AuthenticatedLayout>
    );
}
