import { createSlice } from '@reduxjs/toolkit'

import { RootState } from './../store'

export interface RestaurantState {
  restaurant: {
    id: string | null
    imgUrl: string | null
    title: string | null
    rating: string | null
    genre: string | null
    address: string | null
    short_description: string | null
    dishes: string | null
  }
}

export interface IRestaurantItem {
  id: string | null
  imgUrl: string | null
  title: string | null
  rating: string | null
  genre: string | null
  address: string | null
  short_description: string | null
  dishes: string | null
}

const initialState: RestaurantState = {
  restaurant: {
    id: '',
    imgUrl: '',
    title: '',
    rating: '',
    genre: '',
    address: '',
    short_description: '',
    dishes: ''
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    }
  }
})

export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state: RootState): IRestaurantItem => state.restaurant.restaurant

export default restaurantSlice.reducer
