import { useState, useEffect } from 'react'

import sanityClient from '@src/lib/sanity'
import { IFeaturedCategory } from '@src/shared/interfaces'

type ReturnType = {
  data: IFeaturedCategory[]
  loading: boolean
  error: unknown
}

const useFetchFeaturedCategory = (): ReturnType => {
  const [data, setData] = useState<IFeaturedCategory[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown | null | undefined>(null)

  useEffect(() => {
    const getFeaturedCategories = async (): Promise<void> => {
      try {
        setLoading(true)
        setError(null)

        const data = await sanityClient.fetch(
          `
            *[_type == 'featured'] {
              ...,
              restaurants[]->{
                ...,
                dishes[]->
              }
            }
          `
        )
        setData(data)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    void getFeaturedCategories()
  }, [])

  return { data, loading, error }
}

export default useFetchFeaturedCategory
