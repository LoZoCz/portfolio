import { FC } from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

interface Props {
    classes?: string
}

const SocialsBox: FC<Props> = ({ classes }) => {
    return (
        <div className={twMerge('flex items-center gap-4', classes)}>
            <a href="https://github.com/LoZoCz">
                <DiGithubBadge className="text-2xl text-zinc-50 transition-all duration-300 hover:text-zinc-400" />
            </a>
            <a href="https://www.instagram.com/lozo0_/">
                <FaInstagram className="text-2xl text-zinc-50 transition-all duration-300 hover:text-zinc-400" />
            </a>
            <a href="https://twitter.com/m_czernik">
                <FaXTwitter className="text-2xl text-zinc-50 transition-all duration-300 hover:text-zinc-400" />
            </a>
            <a href="https://www.linkedin.com/in/mateusz-czernik-b687b8193/?trk=opento_sprofile_topcard">
                <FaLinkedin className="text-2xl text-zinc-50 transition-all duration-300 hover:text-zinc-400" />
            </a>
        </div>
    )
}

export default SocialsBox
