import { FC } from 'react'

interface Props {
    path: string
    children: React.ReactNode
}

const ProjectsLink: FC<Props> = ({ path, children }) => {
    return (
        <a
            href={path}
            target="_blank"
            className="relative font-roboto text-lg font-medium transition-colors duration-300 after:absolute after:-left-1 after:-right-1 after:bottom-0 after:-z-[5] after:h-full after:origin-top after:scale-y-0 after:bg-zinc-50 after:transition-transform after:duration-300 after:content-[''] hover:text-zinc-950 hover:after:origin-bottom hover:after:scale-y-100"
        >
            {children}
        </a>
    )
}

export default ProjectsLink
