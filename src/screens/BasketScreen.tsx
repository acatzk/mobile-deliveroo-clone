import { withExpoSnack } from 'nativewind'
import Currency from 'react-currency-formatter'
import React, { FC, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView, TouchableOpacity } from 'react-native'

import { urlFor } from '@src/lib/sanity'
import { Text, View } from '@src/utils/nativewind'
import { RootStackParamList } from '@src/shared/types'
import { IGroupBasketItems } from '@src/shared/interfaces'
import { selectRestaurant } from '@src/redux/restaurant/restaurantSlice'
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal
} from '@src/redux/basket/basketSlice'

type Props = {}

const BasketScreen: FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const restaurant = useSelector(selectRestaurant)
  const basketTotal = useSelector(selectBasketTotal)
  const items = useSelector(selectBasketItems)
  const [groupItemsInBasket, setGroupItemsInBasket] = useState<IGroupBasketItems[][]>([])

  useMemo(() => {
    const groupItems = items.reduce((results: any, item): IGroupBasketItems[] => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setGroupItemsInBasket(groupItems)
  }, [items])

  const handleGoBack = (): void => {
    navigation.goBack()
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="shadow-xs bg-white p-5">
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={handleGoBack}
            className="absolute top-3 right-5 rounded-full bg-gray-100"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="my-5 flex-row items-center space-x-4 bg-white px-4 py-3">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 rounded-full bg-gray-300 p-4"
          />
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */}
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">{items?.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url()
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-xs text-[#00CCBB]"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="mt-5 space-y-4 bg-white p-5">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-400">
            <Currency quantity={basketTotal} currency="GBP" />
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivery Fee</Text>
          <Text className="text-gray-400">
            <Currency quantity={5.99} currency="GBP" />
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="text-gray-400">
            <Currency quantity={basketTotal + 5.99} currency="GBP" />
          </Text>
        </View>

        <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4">
          <Text className="text-center font-bold text-white">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

BasketScreen.defaultProps = {}

export default withExpoSnack(BasketScreen)
