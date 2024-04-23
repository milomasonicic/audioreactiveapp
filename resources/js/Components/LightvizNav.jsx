import NavLink from "./NavLink"

export default function LightViz()
{

    return (
        <div>
            <ul className="flex ml-4 mb-2 ">
                    <li>
                        <NavLink href={route('colorfulbars')} active={route().current('colorfulbars')} className="font-mono text-2x text-stone-400">
                            Audioreactive 1
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href={route('gradient')} active={route().current('gradient')} className="font-mono text-2xl text-stone-400">
                            Audioreactive 2
                        </NavLink>
                    </li>

                </ul>
        </div>
    )
}