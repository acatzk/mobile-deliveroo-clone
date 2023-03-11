import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text, View } from '@src/utils/nativewind'
import { RootStackParamList } from '@src/shared/types'
import { StackNavigationProp } from '@react-navigation/stack'
import { selectRestaurant } from '@src/redux/restaurant/restaurantSlice'

type Props = {}

const DeliveryScreen: FC<Props> = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const restaurant = useSelector(selectRestaurant)

  const handleGoBackHome = (): void => {
    navigation.navigate('Home')
  }

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity onPress={handleGoBackHome}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light">Order Help</Text>
        </View>

        <View className="z-50 mx-5 my-2 rounded-md bg-white p-6 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: 'https://links.papareact.com/fls'
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar width={120} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant?.lat as number,
          longitude: restaurant?.long as number,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        className="z-0 -mt-20 flex-1"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat as number,
            longitude: restaurant?.long as number
          }}
          title={restaurant?.title as string}
          description={restaurant?.short_description as string}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="h-28 flex-row items-center space-x-5 bg-white">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="ml-5 h-12 w-12 rounded-full bg-gray-300 p-4"
        />
        <View className="flex-1">
          <Text className="text-lg">Joshua Galit</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="mr-5 text-lg font-bold text-[#00CCBB]">Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
