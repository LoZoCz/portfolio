import { FC } from 'react'
import { motion } from 'framer-motion'
import { MainContVariants } from '../animations/contentEnterAnim'
import { twMerge } from 'tailwind-merge'
interface Props {
    children: React.ReactNode
    classes?: string
}

const ArtLayout: FC<Props> = ({ children, classes }) => {
    return (
        <motion.article
            variants={MainContVariants}
            initial="initial"
            animate="animate"
            className={twMerge('mt-4 flex flex-col pb-8', classes)}
        >
            {children}
        </motion.article>
    )
}

export default ArtLayout
