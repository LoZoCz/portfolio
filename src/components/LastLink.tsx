import { ChevronsRight } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode
    path: string
    classes?: string
}

const LastLink: FC<Props> = ({ children, path, classes }) => {
    const defaultStyles =
        'group flex w-fit items-center gap-1 font-roboto text-lg font-light transition-colors duration-300 hover:text-zinc-400'

    return (
        <Link to={path} className={twMerge(defaultStyles, classes)}>
            {children}
            <ChevronsRight className="stroke-1 text-zinc-50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-400" />
        </Link>
    )
}

export default LastLink
