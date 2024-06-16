import { type SchemaTypeDefinition } from 'sanity'

import { productType } from './schemas/product'
import { categoryType } from './schemas/categoryType'

export const schemaTypes = [productType, categoryType]


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType],

}
