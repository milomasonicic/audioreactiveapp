
import { motion, useAnimation } from "framer-motion";

import { useRef } from "react";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";




export default function Box1({title, colorfulbars}){

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
            <div className="w-[250px] h-[250px] border border-skyblue-400">
            <h1> {title}</h1>
            <h1 className="text-6xl font-wave text-green-400"> Colorful Barsskskskk sss</h1>
          

           </div>
        </motion.div>
    )


}