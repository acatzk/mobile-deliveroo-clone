import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

import RestaurantCard from './../RestaurantCard'
import { Text, View } from '@src/utils/nativewind'

type Props = {
  title: string
  description: string
}

const FeaturedRow: FC<Props> = (props): JSX.Element => {
  const { title, description } = props

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
        <RestaurantCard
          {...{
            id: 1,
            imgUrl: 'https://links.papareact.com/gn7',
            title: 'Yo! Sushi',
            rating: 4.5,
            genre: 'Japanese',
            address: '123 Main st.',
            short_description: 'This is a test description',
            dishes: [],
            long: 20,
            lat: 0
          }}
        />
        <RestaurantCard
          {...{
            id: 2,
            imgUrl: 'https://links.papareact.com/gn7',
            title: 'Yo! Sushi',
            rating: 4.5,
            genre: 'Japanese',
            address: '123 Main st.',
            short_description: 'This is a test description',
            dishes: [],
            long: 20,
            lat: 0
          }}
        />
        <RestaurantCard
          {...{
            id: 3,
            imgUrl: 'https://links.papareact.com/gn7',
            title: 'Yo! Sushi',
            rating: 4.5,
            genre: 'Japanese',
            address: '123 Main st.',
            short_description: 'This is a test description',
            dishes: [],
            long: 20,
            lat: 0
          }}
        />
      </ScrollView>
    </View>
  )
}

FeaturedRow.defaultProps = {}

export default FeaturedRow
