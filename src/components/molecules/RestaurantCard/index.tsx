import React, { FC } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

import { urlFor } from '@src/lib/sanity'
import { View, Text } from '@src/utils/nativewind'
import { IDish, IImage } from '@src/shared/interfaces'

type Props = {
  id: string
  imgUrl: IImage
  address: string
  title: string
  dishes: IDish[]
  rating: number
  short_description: string
  genre: string
  long: number
  lat: number
}

const RestaurantCard: FC<Props> = (props): JSX.Element => {
  const { imgUrl, title, rating, genre, address } = props

  return (
    <TouchableOpacity className="mr-3 mb-2 overflow-hidden rounded-md bg-white shadow">
      <Image
        source={{
          uri: urlFor(imgUrl).url()
        }}
        className="h-36 w-64"
      />
      <View className="space-y-2 px-3 py-1">
        <Text className="text-lg font-bold">{title}</Text>

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
