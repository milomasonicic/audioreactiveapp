import Scroll from '@/Components/ScrollBar';
import { useScroll, motion } from "framer-motion";

import Footer from '@/Components/landingpage/footer'
import About from '@/Components/landingpage/aboutus'
import ContactForm from '@/Components/landingpage/contact';
import Nav from '@/Components/Nav';

export default function Contact() {

    
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
                <About></About>
                <ContactForm></ContactForm>

                <div className="max-w-[1040px] h-[250px] mx-auto flex justify-between items-center ">

                  <div className="bg-hero4 bg-cover bg-center w-[200px] h-[200px] rounded-full hidden md:block"></div>
                  <div className="bg-hero6 bg-cover bg-center w-[200px] h-[200px] rounded-full hidden md:block"></div>
                  <div className="bg-hero5 bg-cover bg-center w-full h-full md:w-[200px] md:h-[200px] md:rounded-full"></div>

                </div>
                <Footer></Footer>
              
            </div>
    );      

}