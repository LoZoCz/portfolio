import { FC } from 'react'
import { motion } from 'framer-motion'
import { SlideInAnim } from '../../animations/contentEnterAnim'
import SocialsBox from '../SocialsBox'
import LastLink from '../LastLink'
import SectLayout from '../SectLayout'
import useAbout from '../../hooks/useAbout'
import TextPara from '../TextPara'
import ParasBox from '../ParasBox'
import ArtLayout from '../ArtLayout'
import MainHeading from '../MainHeading'
import Footer from '../Footer'

const AboutSection: FC = () => {
    const { aboutData } = useAbout()

    if (!aboutData) return null

    return (
        <SectLayout classes="mt-6">
            <ArtLayout classes="gap-12">
                <MainHeading>{aboutData.title}</MainHeading>
                {aboutData.aboutSections.map((data) => (
                    <ParasBox key={data._key}>
                        <motion.h2
                            variants={SlideInAnim}
                            className="text-2xl font-semibold"
                        >
                            {data.subtitle}
                        </motion.h2>
                        {data.content.map((data) => (
                            <TextPara key={data._key}>
                                {data.children[0].text}
                            </TextPara>
                        ))}
                    </ParasBox>
                ))}
                <Footer>
                    <LastLink path="/projects">{aboutData.bottomLink}</LastLink>
                    <SocialsBox />
                </Footer>
            </ArtLayout>
        </SectLayout>
    )
}

export default AboutSection
