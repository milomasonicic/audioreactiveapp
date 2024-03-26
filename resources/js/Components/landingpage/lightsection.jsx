import NavLink from "../NavLink"
import Playground from "../TitlePlayground"
import Box1 from "../Box1"
import ImageBox from "../ImageBox"


export default function LightSection (){

    return (
        <div className="bg-white min-h-[400px] max-w-[1240px] mx-auto min-h-[950px]">
            <div>
                <div className=" mx-auto mt-14">

                    <Playground></Playground>

                   <div className="flex">
                    <Box1 title={"Colorful bars"}></Box1>
                    <Box1 title={"Numbers"}></Box1>
                   </div>
                </div>

                    <ImageBox></ImageBox>
               
            </div>
        
        </div>
    )
}


/*
<NavLink href={route('colorfulbars')} active={route().current('colorfulbars')}>
                    Colorful Bars
                 </NavLink>
                </li>
                
                <li>
                <NavLink href={route('numbers')} active={route().current('numbers')}>
                    Numbers
                 </NavLink> */