import { IDish, IImage } from '../interfaces'

export type RootStackParamList = {
  Restaurant: {
    id: string
    imgUrl: IImage
    address: string
    title: string
    dishes: IDish[]
    rating: number
    shortDescription: string
    genre: string
    long: number
    lat: number
  }
}
