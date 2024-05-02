import { useEffect, useState } from 'react'
import { client } from '../utils/clients'
import { About } from '../types/aboutDataTypes'

const useAbout = () => {
    const [aboutData, setAboutData] = useState<About | null>(null)

    useEffect(() => {
        client
            .fetch(import.meta.env.VITE_ABOUT_DATA_QUERY)
            .then((data) => setAboutData(data[0]))
            .catch((err) => console.log(err))
    }, [])

    return { aboutData }
}

export default useAbout
