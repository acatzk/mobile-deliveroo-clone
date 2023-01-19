import React, { FC } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

import { View, Text } from '@src/utils/nativewind'

type Props = {
  id: number
  imgUrl: string
  title: string
  rating: number
  genre: string
  address: string
  short_description: string
  dishes: string[]
  long: number
  lat: number
}

const RestaurantCard: FC<Props> = (props): JSX.Element => {
  const { imgUrl, title, rating, genre, address } = props

  return (
    <TouchableOpacity className="mr-3 bg-white shadow">
      <Image
        source={{
          uri: imgUrl
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text className="pt-2 text-lg font-bold">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

RestaurantCard.defaultProps = {}

export default RestaurantCard
