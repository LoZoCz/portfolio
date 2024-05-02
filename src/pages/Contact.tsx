import { FC } from 'react'
import MainLayout from '../components/MainLayout'
import Header from '../components/header/Header'
import ContactSection from '../components/contact/ContactSection'

const Contact: FC = () => {
    return (
        <MainLayout>
            <Header />
            <ContactSection />
        </MainLayout>
    )
}

export default Contact
