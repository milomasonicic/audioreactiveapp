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
                <Footer></Footer>
              
            </div>
    );      

}