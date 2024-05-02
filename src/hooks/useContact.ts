import { useEffect, useState } from 'react'
import { client } from '../utils/clients'
import { Contact } from '../types/contactDataTypes'

const useContact = () => {
    const [contactData, setContactData] = useState<Contact | null>(null)

    useEffect(() => {
        client
            .fetch(import.meta.env.VITE_CONTACT_DATA_QUERY)
            .then((data) => setContactData(data[0]))
            .catch((err) => console.log(err))
    }, [])

    return { contactData }
}

export default useContact
