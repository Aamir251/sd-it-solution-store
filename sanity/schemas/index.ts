import { SchemaTypeDefinition } from 'sanity'

import { productType } from './product'
import { categoryType } from './categoryType'
import { orderType } from './order'
import orderItem from './orderItem'
import { customerType } from './customer'

export const schemaTypes = [productType, categoryType, orderType, orderItem, customerType]


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, orderType, orderItem, customerType],
}
