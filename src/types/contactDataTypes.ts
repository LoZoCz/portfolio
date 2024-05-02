export interface Contact {
    title: string
    content: Content[]
    bottomLink: string
}

export interface Content {
    _type: string
    _key: string
    markDefs: []
    children: Children[]
}

export interface Children {
    _type: string
    marks: []
    text: string
    _key: string
}

export interface BottomLink {
    bottomLink: string
}
