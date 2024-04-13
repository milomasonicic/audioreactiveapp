import NavLink from "../NavLink"
import Playground from "../TitlePlayground"
import Box1 from "../Box1"
import { motion } from "framer-motion";


export default function LightSection (){

    const icons = {
        icon1: "images/bgBars.png",
        icon2: "images/soudnW.gif",
        //icon2: "images/icons8-wave-96.png",
        icon3: "images/audio-waves.png",
    }

    
  const variant = {
        
        visible: {scale: 1, transition:{duration: 2} },
    hidden: {scale: 0.8},
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
                                <Box1 icon={icons.icon3} iconUpper={icons.icon1}></Box1>
                                <h1 className="text-center">
                                    colorful bArs
                                </h1>
                            </div>
                            </NavLink>

                        </li>

                        <li className="">
                            <NavLink href={route('numbers')} active={route().current('numbers')}>
                            <div>
                            <Box1 icon={icons.icon2} iconUpper={icons.icon1}></Box1>
                            <h1 className="text-center">
                                number bArs
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

/*<ImageBox></ImageBox>*/

/*

<NavLink href={route('colorfulbars')} active={route().current('colorfulbars')}>

</NavLink>
</li>

                
                <li>
                <NavLink href={route('numbers')} active={route().current('numbers')}>
                    Numbers
                 </NavLink> */