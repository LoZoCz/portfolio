/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'color-pattern':
                    'radial-gradient(at 10% 30%,#06b6d4 0px,transparent 50%), radial-gradient(at 90% 10%, #f59e0b 0px, transparent 50%), radial-gradient(at 50% 75%, #7c3aed 0px, transparent 50%), radial-gradient(at 10% 60%, #059669 0px, transparent 40%), radial-gradient(at 80% 55%, #e11d48 0px, transparent 70%)',
                'grid-pattern':
                    'linear-gradient(#3f3f4682 1px, transparent 1px), linear-gradient(90deg, #3f3f4682 1px, transparent 1px)',
            },
            backgroundSize: {
                'grid-pattern-size': '6em 6em',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            screens: {
                tablet: '850px',
            },
        },
    },
    plugins: [],
}
