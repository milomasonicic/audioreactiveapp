import NavLink from "../NavLink"



export default function DarkSection (){

    return (
        <div className="bg-black max-w-[1240px] mx-auto">
            <h1> Our cool visuslizer</h1>
            <NavLink href={route('audioanalizer')} active={route().current('audioanalizer')}>
                    audioanalizer 
            </NavLink>

            <NavLink href={route('audioanalizer2')} active={route().current('audioanalizer2')}>
                    audioanalizer 2
            </NavLink>

            <NavLink href={route('audioanalizer3')} active={route().current('audioanalizer3')}>
                    audioanalizer 3
            </NavLink>
            <a href="" className="text-white">
                enter
            </a>
        </div>
    )
}