import { FC } from 'react'
import logo from '../../assets/images/thinIcon.svg'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
import { CiUser, CiFolderOn, CiMail } from 'react-icons/ci'

const Header: FC = () => {
    return (
        <header className="mt-[3.5rem] flex items-center justify-between">
            <Link to="/">
                <img src={logo} alt="main logo" className="size-12" />
            </Link>
            <nav className="">
                <ul className="flex gap-8 font-roboto">
                    <li>
                        <NavLink path="/about">
                            <span className="hidden md:block">O mnie</span>
                            <CiUser className="block size-8 md:hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink path="/projects">
                            <span className="hidden md:block">Projekty</span>
                            <CiFolderOn className="block size-8 md:hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink path="/contact">
                            <span className="hidden md:block">Kontakt</span>
                            <CiMail className="block size-8 md:hidden" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
