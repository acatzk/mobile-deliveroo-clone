import React, { useLayoutEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row items-center space-x-2 pb-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 rounded-full bg-gray-200 p-4"
          />
          <View>
            <Text className="text-xs font-bold text-gray-400">Deliver Now</Text>
            <Text className="text-xl font-bold">Current Location</Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
