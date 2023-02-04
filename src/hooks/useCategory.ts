import { useState, useEffect } from 'react'

import sanityClient from '@src/lib/sanity'
import { ICategory } from '@src/shared/interfaces'

type ReturnType = {
  data: ICategory[]
  loading: boolean
  error: unknown
}

const useCategory = (): ReturnType => {
  const [data, setData] = useState<ICategory[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown | null | undefined>(null)

  useEffect(() => {
    const getCategories = async (): Promise<void> => {
      try {
        setLoading(true)
        setError(null)

        const data = await sanityClient.fetch(`*[_type == 'category']`)
        setData(data)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    void getCategories()
  }, [])

  return { data, loading, error }
}

export default useCategory
