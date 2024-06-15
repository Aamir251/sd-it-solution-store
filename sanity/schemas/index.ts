import { SchemaTypeDefinition } from 'sanity'

import { productType } from './product'
import { categoryType } from './categoryType'

export const schemaTypes = [productType, categoryType]


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType],
}
