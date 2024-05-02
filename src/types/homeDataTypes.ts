export interface Home {
    _id: string
    title: string
    _updatedAt: Date
    content: Content[]
    _createdAt: Date
    bottomLink: string
    _rev: string
    _type: string
}

export interface Content {
    children: Children[]
    _type: string
    style: string
    _key: string
    markDefs: []
}

export interface Children {
    _type: string
    marks: []
    text: string
    _key: string
}
