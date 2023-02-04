import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import Category from './Category'
import useCategory from '@src/hooks/useCategory'

type Props = {}

const Categories: FC<Props> = (): JSX.Element => {
  const { data } = useCategory()

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      className="w-full bg-gray-100"
      showsHorizontalScrollIndicator={false}
    >
      {data?.map((category) => (
        <Category
          key={category._id}
          {...{
            imgUrl: category.image,
            title: category.name
          }}
        />
      ))}
    </ScrollView>
  )
}

Categories.defaultProps = {}

export default Categories
