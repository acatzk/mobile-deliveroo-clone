import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '@src/utils/nativewind'

type Props = {}

const DeliveryScreen: FC<Props> = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>DeliveryScreen</Text>
    </SafeAreaView>
  )
}

DeliveryScreen.defaultProps = {}

export default DeliveryScreen
