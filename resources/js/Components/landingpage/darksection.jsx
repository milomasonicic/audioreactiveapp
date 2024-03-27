import NavLink from "../NavLink"
import { motion, useAnimation } from "framer-motion";
import ImageBox from "../ImageBox";



export default function DarkSection (){

    const variant = {
        visible: {scale: 1},
        hidden: {scale: 0},
      }
    

    return (
        <div className="bg-stone-700">

        <div className=" max-w-[1240px] min-h-[500px] mx-auto text-white flex">
          
            <div className="w-full border border-white">
            <motion.div 
            variants={variant}
            initial="hidden"
            whileInView="visible">

                <ul className="flex justify-between">
                    <li>
                        <h1> Our cool visuslizer</h1>
                    </li>

                    <li>

                        <NavLink href={route('audioanalizer')} active={route().current('audioanalizer')}>
                               
                                audioanalizer 
                        </NavLink>

                    </li>

                    <li>
                        <NavLink href={route('audioanalizer2')} active={route().current('audioanalizer2')}>
                              
                                audioanalizer 2
                        </NavLink>

                    </li>

                    <li>

                        <NavLink href={route('audioanalizer3')} active={route().current('audioanalizer3')}>
                             
                              audioanalizer 3
                        </NavLink>

                    </li>
                </ul>
            </motion.div>

            </div>
            
        </div>

        </div>
    )
}