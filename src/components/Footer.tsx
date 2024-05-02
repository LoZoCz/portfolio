import { FC } from 'react'
import { motion } from 'framer-motion'
import { SlideInAnim } from '../animations/contentEnterAnim'

interface Props {
    children: React.ReactNode
}

const Footer: FC<Props> = ({ children }) => {
    return (
        <motion.footer variants={SlideInAnim} className="space-y-4">
            {children}
        </motion.footer>
    )
}

export default Footer
