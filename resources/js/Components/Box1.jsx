
import { motion, useAnimation } from "framer-motion";

import { useRef } from "react";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";



export default function Box1(){

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);

  
    const boxVariant = {
        visible: { opacity: 1, scale: 0.8, transition:{duration: 3} },
        hidden: { opacity: 0.5, scale: 0.2 },
      }   

    return (
        <motion.div className="box"
        ref={ref}
        animate={control}
        variants={boxVariant}
        initial="hidden"
        >
           <div className="w-[150px] h-[150px] bg-red-700">
            <h1>Box</h1>

           </div>
        </motion.div>
    )


}