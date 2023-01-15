import { Image } from 'react-native'
import { withExpoSnack } from 'nativewind'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

import { StyledText, StyledView } from './../utils/nativewind'

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      <StyledText className="px-4">
        {/* Header */}
        <StyledView className="flex flex-row items-center space-x-2 pb-3">
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
      </StyledText>
    </SafeAreaView>
  )
}

export default withExpoSnack(HomeScreen)
