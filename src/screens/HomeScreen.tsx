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
import useFetchFeaturedCategory from '@src/hooks/useFeaturedCategory'

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation()
  const { data } = useFetchFeaturedCategory()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="mb-20 bg-white pt-5 pb-8">
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
        {data?.map((category) => (
          <FeaturedRow
            key={category._id}
            {...{
              id: category._id,
              title: category.name,
              description: category.short_description
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default withExpoSnack(HomeScreen)
