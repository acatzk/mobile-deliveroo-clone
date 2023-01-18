import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import { StyledText } from '@src/utils/nativewind'

type Props = {}

const Categories: FC<Props> = (): JSX.Element => {
  return (
    <ScrollView className="w-full bg-gray-100">
      <StyledText>categories</StyledText>
    </ScrollView>
  )
}

export default Categories
