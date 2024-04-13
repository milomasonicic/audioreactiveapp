import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 ' +
                (active
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'border-transparent text-gray-500 dark:text-gray-400') +
                className
            }
        >
            {children}
        </Link>
    );
}
