import React, { FC, useEffect } from 'react'
import * as Progress from 'react-native-progress'
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '@src/shared/types'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const PreparingOrderScreen: FC<Props> = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
  }, [])

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Animatable.Image
        source={require('./../assets/ordering.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-center text-lg font-bold text-primary"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#00CCBB" />
    </SafeAreaView>
  )
}

PreparingOrderScreen.defaultProps = {}

export default PreparingOrderScreen
