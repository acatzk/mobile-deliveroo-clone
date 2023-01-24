import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Text } from '@src/utils/nativewind'

type Props = {
  imgUrl: string
  title: string
}

const Category: FC<Props> = ({ imgUrl, title }): JSX.Element => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default Category
