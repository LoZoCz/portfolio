import { FC } from 'react'
import MainLayout from '../components/MainLayout'
import Header from '../components/header/Header'
import ProjectsSection from '../components/projects/ProjectsSection'

const Projects: FC = () => {
    return (
        <MainLayout>
            <Header />
            <ProjectsSection />
        </MainLayout>
    )
}

export default Projects
