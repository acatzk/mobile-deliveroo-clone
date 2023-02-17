import { createSlice } from '@reduxjs/toolkit'

import { RootState } from './../store'
import { IImage } from '@src/shared/interfaces'

export interface BasketState {
  items: IBasketItem[]
}

export interface IBasketItem {
  id: string
  name: string
  description: string
  price: number
  image: IImage
}

const initialState: BasketState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      const newBasket = [...state.items]

      if (index >= 0) {
        newBasket.splice(index, 1)
      }

      state.items = newBasket
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItemsWithId = (state: RootState, id: string): IBasketItem[] =>
  state.basket.items.filter((item) => item.id === id)

export const selectBasketItems = (state: RootState): IBasketItem[] => state.basket.items

export const selectBasketTotal = (state: RootState): number =>
  state.basket.items.reduce((total, item) => (total += item.price), 0)

export default basketSlice.reducer
