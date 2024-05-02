import { FC } from 'react'
import { motion } from 'framer-motion'
import { SlideInAnim } from '../animations/contentEnterAnim'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode
    classes?: string
}

const MainHeading: FC<Props> = ({ children, classes }) => {
    return (
        <motion.h1
            variants={SlideInAnim}
            className={twMerge('font-roboto text-5xl font-semibold', classes)}
        >
            {children}
        </motion.h1>
    )
}

export default MainHeading
