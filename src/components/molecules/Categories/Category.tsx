import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { urlFor } from '@src/lib/sanity'
import { Text } from '@src/utils/nativewind'
import { IImage } from '@src/shared/interfaces'

type Props = {
  imgUrl: IImage
  title: string
}

const Category: FC<Props> = ({ imgUrl, title }): JSX.Element => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).url()
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default Category
