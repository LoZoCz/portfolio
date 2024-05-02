import { FC } from 'react'
import MainLayout from '../components/MainLayout'
import Header from '../components/header/Header'
import AboutSection from '../components/about/AboutSection'

const About: FC = () => {
    return (
        <MainLayout>
            <Header />
            <AboutSection />
        </MainLayout>
    )
}

export default About
