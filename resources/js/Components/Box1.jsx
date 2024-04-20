
import { motion, useAnimation } from "framer-motion";


import { useInView } from "react-intersection-observer";

import { useEffect } from "react";


export default function Box1({icon, iconUpper}){

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);

  
    const boxVariant = {
        visible: { opacity: 1, scale: 0.8, transition:{duration: 3} },
        hidden: { opacity: 0.85, scale: 0.6 },
      }   

    return (
      <div className=" " >
        <motion.div className="box"
      
        ref={ref}
        animate={control}
        variants={boxVariant}
        initial="hidden"
        
        >
            <div className="transition bg-slate-50 ease-in-out delay-20 hover:scale-105  w-[320px] h-[220px] rounded-3xl ring-offset-1 ring-1 relative">
              <img src={icon} alt="" className="absolute w-[25%] top-1/3 left-1/3" />
              <img src={iconUpper} className="object-cover h-full rounded-3xl"></img>
            
           </div>
        </motion.div>

      </div>
    )


}