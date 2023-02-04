import { useState, useEffect } from 'react'

import sanityClient from '@src/lib/sanity'
import { IRestaurant } from '@src/shared/interfaces'

type ReturnType = {
  data: IRestaurant[]
  loading: boolean
  error: unknown
}

const useRestaurant = (id: string): ReturnType => {
  const [data, setData] = useState<IRestaurant[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown | null | undefined>(null)

  useEffect(() => {
    const getRestaurants = async (): Promise<void> => {
      try {
        setLoading(true)
        setError(null)

        const data = await sanityClient.fetch(
          `
            *[_type == 'featured' && _id == $id] {
              ...,
              restaurants[]->{
                ...,
                dishes[]->,
                type->{
                  name
                }
              }
            }[0]
          `,
          { id }
        )
        setData(data?.restaurants)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    void getRestaurants()
  }, [])

  return { data, loading, error }
}

export default useRestaurant
