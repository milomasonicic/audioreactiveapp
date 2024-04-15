
import { Head } from '@inertiajs/react';
import Nav from '@/Components/Nav';
import Footer from '@/Components/landingpage/footer';
import Bars from '@/Components/audioreactive/bars';



export default function colorfulbars() {
    return (
        <div>
       <div className='bg-gray-100 pb-[150px] '>
        
        <Nav></Nav>  
        <div className='mt-[25px] max-w-container mx-auto border border-white-700 rounded-3xl pt-12 pb-12 bg-gray-50'>
            <Bars></Bars>

        </div>
       </div>

        <div className=''>
            <Footer></Footer>   
        </div>
        </div>
    );
}
