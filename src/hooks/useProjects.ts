import { useEffect, useState } from 'react'
import { Projects } from '../types/projectsDataTypes'
import { client } from '../utils/clients'

const useProjects = () => {
    const [projectsData, setProjectsData] = useState<Projects | null>(null)

    useEffect(() => {
        client
            .fetch(import.meta.env.VITE_PROJECTS_DATA_QUERY)
            .then((projectsPageData) => {
                setProjectsData(projectsPageData[0])
            })
            .catch((error) => {
                console.error('Error fetching projects page data:', error)
            })
    }, [])

    return { projectsData }
}

export default useProjects
