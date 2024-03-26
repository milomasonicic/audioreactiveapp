


import { motion, useAnimation } from "framer-motion";

import { useScroll } from 'framer-motion';


export default function Scroll(){

      const { scrollYProgress } = useScroll();

    return (
      
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    )


}