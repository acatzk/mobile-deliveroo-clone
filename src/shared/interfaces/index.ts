export interface IFeaturedCategory {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  name: string
  restaurants: IRestaurant[]
  short_description: string
}

export interface IRestaurant {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  address: string
  dishes: IDish[]
  image: IImage
  lat: number
  long: number
  name: string
  rating: number
  short_description: string
  type: {
    name: string
  }
}

export interface IDish {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  image: IImage
  name: string
  price: number
  short_description: string
}

export interface IImage {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

export interface ICategory {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  image: IImage
  name: string
}
