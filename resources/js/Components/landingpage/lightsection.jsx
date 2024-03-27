import NavLink from "../NavLink"
import Playground from "../TitlePlayground"
import Box1 from "../Box1"
import ImageBox from "../ImageBox"
import { motion, useAnimation } from "framer-motion";


export default function LightSection (){

    const icons = {
        icon1: "images/soudnW.gif",
        icon2: "images/icons8-wave-96.png",
        icon3: "images/audio-waves.png",
    }

    
  const variant = {
    visible: {scale: 1},
    hidden: {scale: 0.8},
  }

  

    return (

        <div className="bg-stone-50 ">
            <div className="min-h-[400px] max-w-[1240px] mx-auto min-h-[650px] pt-22 pt-16">
                <motion.div 
                  variants={variant}
                  initial="hidden"
                  whileInView="visible"
                
                className="pt-12 max-w-[45%] min-h-[450px] mx-auto mt-14 border border-dashed border-8 border-sky-300 rounded-3xl">

                     
                    <Playground></Playground>

                    <ul className="w-[99%] pt-8">
                        <li className="pt-6">
                            <NavLink href={route('colorfulbars')} active={route().current('colorfulbars')}>
                            <div>
                                <Box1 icon={icons.icon3} iconUpper={icons.icon1}></Box1>
                                <h1 className="font-mono">
                                    colorful bArs
                                </h1>
                            </div>
                            </NavLink>

                        </li>

                        <li className="pt-6">
                            <NavLink href={route('numbers')} active={route().current('numbers')}>
                            <div>
                            <Box1 icon={icons.icon2} iconUpper={icons.icon1}></Box1>
                            <h1 className="font-mono">
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