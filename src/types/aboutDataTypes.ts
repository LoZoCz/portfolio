export interface About {
    aboutSections: AboutSection[]
    bottomLink: string
    title: string
    _createdAt: string
    _id: string
    _rev: string
    _interface: string
    _updatedAt: string
}

export interface AboutSection {
    content: Content[]
    subtitle: string
    _key: string
    _type: string
}

export interface Content {
    children: Children[]
    markDefs: []
    style: string
    _key: string
    _type: string
}

export interface Children {
    marks: []
    text: string
    _key: string
    _type: string
}
