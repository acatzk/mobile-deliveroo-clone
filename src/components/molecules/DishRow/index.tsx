import React, { FC, useState } from 'react'
import Currency from 'react-currency-formatter'
import { MinusCircleIcon } from 'react-native-heroicons/solid'
import { PlusCircleIcon } from 'react-native-heroicons/outline'

import { urlFor } from '@src/lib/sanity'
import { IImage } from '@src/shared/interfaces'
import { Text, View } from '@src/utils/nativewind'
import { Image, TouchableOpacity } from 'react-native'
import { useAppDispatch, useAppSelector } from '@src/redux/store'
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId
} from '@src/redux/basket/basketSlice'

type Props = {
  id: string
  name: string
  description: string
  price: number
  image: IImage
}

const DishRow: FC<Props> = ({ id, name, description, price, image }): JSX.Element => {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => selectBasketItemsWithId(state, id))

  const [isPressed, setIsPressed] = useState<boolean>(false)

  const handelPressed = (): void => {
    setIsPressed(!isPressed)
  }

  const handleAddItemToBasket = (): void => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        image
      })
    )
  }

  const handleRemoveItemFromBasket = (): void => {
    if (!(items.length > 0)) return
    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
      <TouchableOpacity onPress={handelPressed} className="bg-white p-4">
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-lg">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="tex-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: urlFor(image).url()
              }}
              className="h-20 w-20 bg-gray-300 p-4"
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4'
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={handleRemoveItemFromBasket} disabled={items.length === 0}>
              <MinusCircleIcon color={items.length > 0 ? '#00CCBB' : 'gray'} size={40} />
            </TouchableOpacity>

            <Text>{items.length}</Text>
            <TouchableOpacity onPress={handleAddItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

DishRow.defaultProps = {}

export default DishRow
