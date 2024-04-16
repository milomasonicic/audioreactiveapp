import NavLink from "./NavLink"

export default function VizNavigation()
{

    return (
        <div>
            <ul className="flex ml-4  ">
                    <li>
                        <NavLink href={route('audioanalizer')} active={route().current('audioanalizer')} className="font-mono text-2x text-stone-400">
                            Vizualizer 1
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href={route('audioanalizer2')} active={route().current('audioanalizer2')} className="font-mono text-2xl text-stone-400">
                            Vizualizer 2
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href={route('audioanalizer3')} active={route().current('audioanalizer3')} className="font-mono text-2xl text-stone-400">
                            Vizualizer 3
                        </NavLink>
                    </li>
                </ul>
        </div>
    )
}