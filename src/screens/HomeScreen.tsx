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

import Categories from '@src/components/molecules/Categories'
import { StyledText, StyledView } from '@src/utils/nativewind'

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
      <StyledView className="flex flex-row items-center space-x-2 px-4 pb-3">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 shrink-0 rounded-full bg-gray-200 p-4"
        />

        <StyledView className="flex-1">
          <StyledText className="text-xs font-bold text-gray-400">Deliver Now</StyledText>
          <StyledText className="text-xl font-bold">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </StyledText>
        </StyledView>

        <UserIcon size={30} color="#00CCBB" />
      </StyledView>

      {/* Search */}
      <StyledView className="flex-row items-center space-x-2 px-4 pb-2">
        <StyledView className="flex-1">
          <StyledView className="flex-row items-center space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="#00CCBB" size={20} />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
          </StyledView>
        </StyledView>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </StyledView>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default withExpoSnack(HomeScreen)
