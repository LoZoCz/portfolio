import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode
    classes?: string
}

const MainLayout: FC<Props> = ({ children, classes }) => {
    return (
        <main className={twMerge('min-h-scree mx-auto max-w-5xl', classes)}>
            {children}
        </main>
    )
}

export default MainLayout
