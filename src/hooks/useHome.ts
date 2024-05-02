import { useEffect, useState } from 'react'
import { Home } from '../types/homeDataTypes'
import { client } from '../utils/clients'

const useHome = () => {
    const [homeData, setHomeData] = useState<Home | null>(null)

    useEffect(() => {
        client
            .fetch(import.meta.env.VITE_HOME_DATA_QUERY)
            .then((data) => setHomeData(data[0]))
            .catch((err) => console.log(err))
    }, [])

    return { homeData }
}

export default useHome
