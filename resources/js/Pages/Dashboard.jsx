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

                   <div className="max-w-[1040px] h-[250px] mx-auto flex justify-between items-center ">

                      <div className="bg-hero4 bg-cover bg-center w-[200px] h-[200px] rounded-full hidden md:block"></div>
                        <div className="bg-hero6 bg-cover bg-center w-[200px] h-[200px] rounded-full hidden md:block"></div>
                      <div className="bg-hero5 bg-cover bg-center w-full h-full md:w-[200px] md:h-[200px] md:rounded-full"></div>

                    </div>

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