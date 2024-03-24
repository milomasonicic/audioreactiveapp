import NavLink from "./NavLink"

export default function Nav() {

    return (
        <div className="bg-pink max-w-container mx-auto">
           
                <ul className="flex justify-between">
                    <li>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href={route('about')} active={route().current('about')}>
                            About Us
                        </NavLink>
                    
                    </li>

                    <li>
                        <NavLink href={route('contact')} active={route().current('contact')}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            
        </div>
    )
}