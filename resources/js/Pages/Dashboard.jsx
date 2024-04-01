import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { Button } from '@mui/base';

import Scroll from '@/Components/ScrollBar';
import { useScroll, motion } from "framer-motion";
import Hero from '@/Components/landingpage/hero'
import Light from '@/Components/landingpage/lightsection'
import Dark from '@/Components/landingpage/darksection'
import Footer from '@/Components/landingpage/footer'
import Newsletter from '@/Components/landingpage/newsletter'
import Nav from '@/Components/Nav';





export default function Dashboard() {
    
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"],
      });

    return (
       

            <div className="bg-gray-100">
                  <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
                <Scroll></Scroll>
                <Nav></Nav>
                <Hero></Hero>
                   <Light></Light>
                   <Dark></Dark>
                   <Newsletter></Newsletter>

                   <Footer></Footer>
                  

            </div>


            
      
    );
}
//<!--AuthenticatedLayout
//user={auth.user}
//header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
//>
//<Head title="Dashboard" />
//</AuthenticatedLayout-->