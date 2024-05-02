import { FC } from 'react'
import SectLayout from '../SectLayout'
import LastLink from '../LastLink'
import SocialsBox from '../SocialsBox'
import ArtLayout from '../ArtLayout'
import MainHeading from '../MainHeading'
import TextPara from '../TextPara'
import ContactForm from './ContactForm'
import Footer from '../Footer'
import useContact from '../../hooks/useContact'

const ContactSection: FC = () => {
    const { contactData } = useContact()

    if (!contactData) return null

    return (
        <SectLayout>
            <ArtLayout classes="gap-8">
                <MainHeading>{contactData.title}</MainHeading>
                <TextPara classes="text-lg">
                    {contactData.content.map((data) => {
                        return data.children[0].text
                    })}
                </TextPara>
                <ContactForm />
                <Footer>
                    <LastLink path="/">{contactData.bottomLink}</LastLink>
                    <SocialsBox />
                </Footer>
            </ArtLayout>
        </SectLayout>
    )
}

export default ContactSection
