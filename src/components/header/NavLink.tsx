import { FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode
    path: string
    classes?: string
}

const NavLink: FC<Props> = ({ children, path, classes }) => {
    const defaultStyles =
        "relative text-xl font-light after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:origin-top-right after:scale-x-0 after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[''] hover:after:origin-top-left hover:after:scale-x-100 focus-within:after:scale-x-100"

    return (
        <Link to={path} className={twMerge(defaultStyles, classes)}>
            {children}
        </Link>
    )
}

export default NavLink
