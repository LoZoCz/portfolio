import { FC } from 'react'
import ParasBox from '../ParasBox'
import SocialsBox from '../SocialsBox'
import TextPara from '../TextPara'
import LastLink from '../LastLink'
import SectLayout from '../SectLayout'
import useHome from '../../hooks/useHome'
import ArtLayout from '../ArtLayout'
import MainHeading from '../MainHeading'
import Footer from '../Footer'

const HomeSection: FC = () => {
    const { homeData } = useHome()

    if (!homeData) return null

    return (
        <SectLayout>
            <ArtLayout classes="h-[60%] gap-6">
                <MainHeading>{homeData.title}</MainHeading>
                <ParasBox>
                    {homeData.content.map((data) => (
                        <TextPara key={data._key}>
                            {data.children[0].text}
                        </TextPara>
                    ))}
                </ParasBox>
                <Footer>
                    <LastLink path="/about">{homeData.bottomLink}</LastLink>
                    <SocialsBox />
                </Footer>
            </ArtLayout>
        </SectLayout>
    )
}

export default HomeSection
