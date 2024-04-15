import NavLink from "./NavLink"

export default function Nav() {

    return (
        <div className="border-b">

       
        <div className="bg-pink max-w-[1240px] mx-auto">
           
                <ul className="flex justify-between md:px-12 px-4 min-h-[70px] items-center ">
                    <li>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')} className="text-3xl font-wave">
                            HomeAudioVizulizerHomeAudioVizulizerHome
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href={route('contact')} active={route().current('contact')} className="font-mono text-2xl">
                                contact us 
                        </NavLink>
                    </li>
                </ul>
            
        </div>
        </div>
    )
}