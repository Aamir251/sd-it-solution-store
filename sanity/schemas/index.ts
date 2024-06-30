import { SchemaTypeDefinition } from 'sanity'

import { productType } from './product'
import { categoryType } from './categoryType'
import { orderType } from './order'
import { orderItem } from './orderItem'

export const schemaTypes = [productType, categoryType, orderType, orderItem]


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, orderType, orderItem],
}
