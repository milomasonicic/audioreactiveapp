import NavLink from "../NavLink"
import Playground from "../TitlePlayground"
import Box1 from "../Box1"


export default function LightSection (){

    return (
        <div className="bg-white min-h-[400px] max-w-[1240px] mx-auto min-h-[3000px]">
            <ul>
                <li>

                    <Playground></Playground>

                   <div className="flex">
                    <Box1></Box1>
                    <Box1></Box1>
                   </div>

                <NavLink href={route('colorfulbars')} active={route().current('colorfulbars')}>
                    Colorful Bars
                 </NavLink>
                </li>
                
                <li>
                <NavLink href={route('numbers')} active={route().current('numbers')}>
                    Numbers
                 </NavLink>

                </li>
            </ul>
        </div>
    )
}