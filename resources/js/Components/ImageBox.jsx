
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";


export default function ImageBox(){

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 650]);
  return (
    <section>
      <div ref={ref}>
      <img src='/images/hero5.jpg' ref={ref}></img>
        
      </div>
      <motion.h2 style={{ y }}></motion.h2>
    </section>
  );
    


}