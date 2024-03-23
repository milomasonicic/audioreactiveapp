import NavLink from "../NavLink"

export default function LightSection (){

    return (
        <div className="bg-white">
            <ul>
                <li>
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