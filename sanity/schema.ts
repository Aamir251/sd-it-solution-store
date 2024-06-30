import { type SchemaTypeDefinition } from 'sanity'

import { productType } from './schemas/product'
import { categoryType } from './schemas/categoryType'
import { orderType } from './schemas/order'
import orderItem from './schemas/orderItem'

export const schemaTypes = [productType, categoryType, orderType, orderItem]


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, orderType, orderItem],

}
