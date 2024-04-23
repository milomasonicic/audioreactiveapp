import NavLink from "../NavLink"
import Playground from "../TitlePlayground"
import Box1 from "../Box1"
import { motion } from "framer-motion";


export default function LightSection (){

    const icons = {
        icon1: "images/soundBars.png",
        icon2: "images/soundBars.png",
    }

    
  const variant = {
        
        visible: {scale: 0.9, transition:{duration: 1.2} },
    hidden: {scale: 0.6},
  }

  

    return (

        <div className="bg-stone-50 ">
            <div className="min-h-[400px] max-w-[1240px] mx-auto min-h-[650px] pt-16">
                
                <Playground></Playground>
                <motion.div 
                  variants={variant}
                  initial="hidden"
                  whileInView="visible"
                
                className=" w-full min-h-[450px] mx-auto mt-8 ">

                     

                    <ul className="md:w-[99%] w-[59%] md:flex flex-column">
                        <li className="">
                            <NavLink href={route('colorfulbars')} active={route().current('colorfulbars')}>
                            <div>
                                <Box1 iconUpper={icons.icon1}></Box1>
                                <h1 className="text-center font-bold text-center">
                                  Audioreactive 1
                                </h1>
                            </div>
                            </NavLink>

                        </li>

                        <li className="">
                            <NavLink href={route('gradient')} active={route().current('gradient')}>
                            <div>
                            <Box1  iconUpper={icons.icon2}></Box1>
                            <h1 className="text-center text-center font-bold">
                                Audioreactive 2
                            </h1>

                            </div>
                            </NavLink> 

                        </li>

                    </ul>

                </motion.div>

               
            </div>
        
        </div>
    )
}

