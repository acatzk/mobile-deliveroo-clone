import React, { FC } from 'react'
import { ScrollView } from 'react-native'

import Category from './Category'

type Props = {}

const Categories: FC<Props> = (): JSX.Element => {
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
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 1'
        }}
      />
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 2'
        }}
      />
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 3'
        }}
      />
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 4'
        }}
      />
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 5'
        }}
      />
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 6'
        }}
      />
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 7'
        }}
      />
      <Category
        {...{
          imgUrl: 'https://links.papareact.com/gn7',
          title: 'Test 3'
        }}
      />
    </ScrollView>
  )
}

Categories.defaultProps = {}

export default Categories
