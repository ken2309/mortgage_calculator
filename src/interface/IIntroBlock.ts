export interface IIntroBlock {
    title: string,
    icon: Icon,
    description: {
        description: string
    }
}
interface Icon {
    url: string,
    width: 45,
    height: 45,
    title: string,
    description: string
}