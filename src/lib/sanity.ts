import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

import { IImage } from '@src/shared/interfaces'

const client = sanityClient({
  projectId: 'jlh2sm2i',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: IImage): ImageUrlBuilder => builder.image(source)

export default client
