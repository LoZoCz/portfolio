import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

interface Props {
    children: React.ReactNode
    classes?: string
}

const sectionVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.75,
        },
    },
}

const SectLayout: FC<Props> = ({ children, classes }) => {
    return (
        <motion.section
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            style={{ minHeight: 'calc(100vh - 12rem)' }}
            className={twMerge('mt-6 flex items-center', classes)}
        >
            {children}
        </motion.section>
    )
}

export default SectLayout
