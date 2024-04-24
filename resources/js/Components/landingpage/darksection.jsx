import NavLink from "../NavLink"
import { motion, useAnimation } from "framer-motion";

import Box1 from "../Box1"


export default function DarkSection (){

    const icons = {
        icon1: "images/darkAud (1).png",
        icon2: "images/darkAud (2).png",
        icon3: "images/darkAud (3).png",
    }


    const variant = {
        visible: {scale: 0.9},
        hidden: {scale: 0.6},
      }

      const variantH1 = {
        visible: {opacty: 1, scale: 1},
        hidden: {opacty: 0, scale:0.5},
      }
    
    

    return (
        <div className="bg-stone-700">

        <div className=" max-w-[1240px] min-h-[400px] mx-auto text-white ">

            <div>
            <motion.h1 
              variants={variantH1}
              initial="hidden"
              whileInView="visible"
            className='font-mono  ml-[12px] md:ml-[0px] font-bold text-2xl md:text-4xl text-white '>
                our audio vizualizers
            </motion.h1>
            </div>
          
            <div className="w-[99%]">
            <motion.div 
            variants={variant}
            initial="hidden"
            whileInView="visible">

                <ul className="flex-col md:flex md:flex-row md:justify-between">
                   

                    <li>

                        <NavLink href={route('audioanalizer')} active={route().current('audioanalizer')}>
                            <div>
                               <Box1 iconUpper={icons.icon1}></Box1>
                               <h1 className="text-center text-xl text-stone-100">
                                Audioanalizer 1
                               </h1>
                            </div>
                        </NavLink>

                    </li>

                    <li>
                        <NavLink href={route('audioanalizer2')} active={route().current('audioanalizer2')}>
                            <div>
                                <Box1 iconUpper={icons.icon2}></Box1>
                                <h1 className="text-center text-xl text-stone-100">
                                    Audioanalizer 2
                                </h1>
                            </div>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink href={route('audioanalizer3')} active={route().current('audioanalizer3')}>
                            <div>
                            <Box1 iconUpper={icons.icon3}></Box1>
                              <h1 className="text-center text-xl text-stone-100">
                              Audioanalizer 3
                              </h1>
                            </div>
                        </NavLink>

                    </li>
                </ul>
            </motion.div>

            </div>
            
        </div>

        </div>
    )
}