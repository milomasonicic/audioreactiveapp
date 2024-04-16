import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Nav from '@/Components/Nav';
import Footer from '@/Components/landingpage/footer';
import AudioAnalyzer from '@/Components/audioreactive/audioAnalizer';
import VizNavigation from '@/Components/vizNavigation';

export default function an() {
    return (
        <div>
            <div className='bg-[#44403C] pb-[30px]'>
                <Nav></Nav>
                <div className='max-w-[1140px] mt-[25px] mx-auto border border-white-700 rounded-3xl bg-[#54504d] h-[600px]'>
                    <VizNavigation></VizNavigation>
                    <AudioAnalyzer></AudioAnalyzer>
                    
                </div>

            </div>

            <Footer></Footer>
        </div>
       
       
    );
}
