import { withExpoSnack } from 'nativewind'
import React, { FC, useEffect, useLayoutEffect } from 'react'
import { ScrollView, Image, TouchableOpacity } from 'react-native'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import {
  StarIcon,
  MapPinIcon,
  ArrowLeftIcon,
  QuestionMarkCircleIcon
} from 'react-native-heroicons/outline'
import { useDispatch } from 'react-redux'

import { urlFor } from '@src/lib/sanity'
import { Text, View } from '@src/utils/nativewind'
import { RootStackParamList } from '@src/shared/types'
import DishRow from '@src/components/molecules/DishRow'
import BasketIcon from '@src/components/molecules/BasketIcon'
import { StackNavigationProp } from '@react-navigation/stack'
import { setRestaurant } from '@src/redux/restaurant/restaurantSlice'

type Props = {}

const RestaurantScreen: FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const {
    params: { id, title, dishes, imgUrl, rating, genre, address, shortDescription, long, lat }
  } = useRoute<RouteProp<Pick<RootStackParamList, 'Restaurant'>>>()

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        title,
        dishes,
        imgUrl,
        rating,
        genre,
        address,
        shortDescription,
        long,
        lat
      })
    )
  }, [dispatch])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url()
            }}
            className="h-56 w-full bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 rounded-full bg-gray-100 p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="my-1 flex-row space-x-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>. {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
          </View>
          <Text className="mt-2 pb-4 text-gray-500">{shortDescription}</Text>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="text-md flex-1 pl-2 font-bold">Have a food allergy</Text>
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          {dishes.map((dish, index) => (
            <DishRow
              key={index}
              {...{
                id: dish._id,
                name: dish.name,
                description: dish.short_description,
                price: dish.price,
                image: dish.image
              }}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default withExpoSnack(RestaurantScreen)
