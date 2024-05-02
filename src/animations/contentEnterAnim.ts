export const SlideInAnim = {
    initial: { y: '10px', opacity: 0, scale: 0.95 },
    animate: {
        y: '0px',
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
}

export const MainContVariants = {
    initial: { transition: { staggerChildren: 0.25 } },
    animate: { transition: { staggerChildren: 0.25 } },
}
