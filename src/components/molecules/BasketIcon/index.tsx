import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Currency from 'react-currency-formatter'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useAppSelector } from '@src/redux/store'
import { View, Text } from '@src/utils/nativewind'
import { RootStackParamList } from '@src/shared/types'
import { selectBasketItems, selectBasketTotal } from '@src/redux/basket/basketSlice'

type Props = {}

const BasketIcon: FC<Props> = (): JSX.Element => {
  const items = useAppSelector(selectBasketItems)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return <></>

  const handleNavigateToBasket = (): void => {
    navigation.navigate('Basket')
  }

  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        onPress={handleNavigateToBasket}
        className="mx-5 flex-row items-center space-x-1 rounded-lg bg-[#00CCBB] p-4"
      >
        <Text className="bg-[#01A296] py-1 px-2 text-lg font-extrabold text-white">
          {items.length}
        </Text>
        <Text className="flex-1 text-center text-lg font-extrabold text-white">View Basket</Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

BasketIcon.defaultProps = {}

export default BasketIcon
