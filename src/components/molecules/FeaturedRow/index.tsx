import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

import RestaurantCard from './../RestaurantCard'
import { Text, View } from '@src/utils/nativewind'
import useRestaurant from '@src/hooks/useRestaurant'

type Props = {
  id: string
  title: string
  description: string
}

const FeaturedRow: FC<Props> = ({ id, title, description }): JSX.Element => {
  const { data } = useRestaurant(id)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        {data?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            {...{
              id: restaurant._id,
              imgUrl: restaurant.image,
              address: restaurant.address,
              title: restaurant.name,
              dishes: restaurant.dishes,
              rating: restaurant.rating,
              short_description: restaurant.short_description,
              genre: restaurant.type?.name,
              long: restaurant.long,
              lat: restaurant.lat
            }}
          />
        ))}
      </ScrollView>
    </View>
  )
}

FeaturedRow.defaultProps = {}

export default FeaturedRow
