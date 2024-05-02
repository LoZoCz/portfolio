export interface Projects {
    title: string
    bottomLink: string
    projects: Project[]
}

export interface Project {
    _id: string
    title: string
    slug: Slug
    github: string
    demo: string
    content: Contetnt[]
    imageUrl: string
}

interface Slug {
    _type: string
    current: string
}

interface Contetnt {
    _type: string
    style: string
    _key: string
    children: Children[]
}

interface Children {
    _type: string
    marks: []
    text: string
    _key: string
}
