import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { SlideInAnim } from '../animations/contentEnterAnim'

interface Props {
    children: React.ReactNode
    classes?: string
}

const TextPara: FC<Props> = ({ children, classes }) => {
    return (
        <motion.p
            variants={SlideInAnim}
            className={twMerge('leading-7', classes)}
        >
            {children}
        </motion.p>
    )
}

export default TextPara
