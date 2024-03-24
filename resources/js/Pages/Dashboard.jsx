import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { Button } from '@mui/base';


import Hero from '@/Components/landingpage/hero'
import Light from '@/Components/landingpage/lightsection'
import Dark from '@/Components/landingpage/darksection'
import Newsletter from '@/Components/landingpage/newsletter'
import Nav from '@/Components/Nav';



export default function Dashboard({ auth }) {
    return (
       

            <div className="">
                <Nav></Nav>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                   <Hero></Hero>
                   <Light></Light>
                   <Dark></Dark>
                   <Newsletter></Newsletter>
                  
                 
                </div>
               

            </div>


            
      
    );
}
//<!--AuthenticatedLayout
//user={auth.user}
//header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
//>
//<Head title="Dashboard" />
//</AuthenticatedLayout-->