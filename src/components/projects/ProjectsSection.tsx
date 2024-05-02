import { FC } from 'react'
import { motion } from 'framer-motion'
import { SlideInAnim } from '../../animations/contentEnterAnim'
import SectLayout from '../SectLayout'
import useProjects from '../../hooks/useProjects'
import LastLink from '../LastLink'
import SocialsBox from '../SocialsBox'
import ParasBox from '../ParasBox'
import TextPara from '../TextPara'
import ProjectsLink from './ProjectsLink'
import ArtLayout from '../ArtLayout'
import MainHeading from '../MainHeading'
import Footer from '../Footer'

const ProjectsSection: FC = () => {
    const { projectsData } = useProjects()

    if (!projectsData) return null

    return (
        <SectLayout>
            <ArtLayout classes="gap-8">
                <MainHeading>{projectsData.title}</MainHeading>
                {projectsData.projects.map((data) => (
                    <motion.div variants={SlideInAnim} key={data._id}>
                        <ParasBox classes="static mb-4 lg:absolute bottom-4 left-4 z-20 md:w-3/5">
                            <motion.h2
                                variants={SlideInAnim}
                                className="text-3xl font-semibold"
                            >
                                {data.title}
                            </motion.h2>
                            {data.content.map((data) => (
                                <TextPara key={data._key}>
                                    {data.children[0].text}
                                </TextPara>
                            ))}
                        </ParasBox>
                        <motion.div
                            variants={SlideInAnim}
                            className="static bottom-4 right-4 z-20 mb-4 flex gap-4 lg:absolute"
                        >
                            <ProjectsLink path={data.demo}>
                                Live Demo
                            </ProjectsLink>
                            <ProjectsLink path={data.github}>
                                Github
                            </ProjectsLink>
                        </motion.div>
                        <motion.div
                            variants={SlideInAnim}
                            className="relative before:absolute before:left-0 before:right-0 before:z-10 before:h-full before:rounded-md before:bg-gradient-to-b before:from-transparent before:to-transparent before:content-[''] lg:before:to-zinc-950"
                            key={data._id}
                        >
                            <img
                                src={data.imageUrl}
                                alt={data.slug.current + '-image'}
                                className="-z-10 rounded-md"
                            />
                        </motion.div>
                    </motion.div>
                ))}
                <Footer>
                    <LastLink path="/contact">
                        {projectsData.bottomLink}
                    </LastLink>
                    <SocialsBox />
                </Footer>
            </ArtLayout>
        </SectLayout>
    )
}

export default ProjectsSection
