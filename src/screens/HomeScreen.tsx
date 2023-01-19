import { withExpoSnack } from 'nativewind'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'

import { Text, View } from '@src/utils/nativewind'
import Categories from '@src/components/molecules/Categories'
import FeaturedRow from '@src/components/molecules/FeaturedRow'

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex flex-row items-center space-x-2 px-4 pb-3">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 shrink-0 rounded-full bg-gray-200 p-4"
        />

        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver Now</Text>
          <Text className="text-xl font-bold">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-1">
          <View className="flex-row items-center space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="#00CCBB" size={20} />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
          </View>
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          {...{
            id: 1,
            title: 'Featured',
            description: 'Paid placements from our partners'
          }}
        />
        <FeaturedRow
          {...{
            id: 2,
            title: 'Tasty Discount',
            description: "Everyone's been enjoying these juicy discount!"
          }}
        />
        <FeaturedRow
          {...{
            id: 3,
            title: 'Offers near you!',
            description: 'Why not support your local restaurant tonight!'
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default withExpoSnack(HomeScreen)
