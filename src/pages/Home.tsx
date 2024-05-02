import { FC } from 'react'
import Header from '../components/header/Header'
import HomeSection from '../components/home/HomeSection'
import MainLayout from '../components/MainLayout'

const Home: FC = () => {
    return (
        <MainLayout>
            <Header />
            <HomeSection />
        </MainLayout>
    )
}

export default Home
