import { IDish, IImage } from './../interfaces'

export type RootStackParamList = {
  Home: undefined
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
  Basket: undefined
}
