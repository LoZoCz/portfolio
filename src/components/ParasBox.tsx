import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode
    classes?: string
}

const ParasBox: FC<Props> = ({ children, classes }) => {
    return (
        <div className={twMerge('space-y-3 font-roboto', classes)}>
            {children}
        </div>
    )
}

export default ParasBox
