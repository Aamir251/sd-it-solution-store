import { type SchemaTypeDefinition } from 'sanity'

import { productType } from './schemas/product'
import { categoryType } from './schemas/categoryType'
import { orderType } from './schemas/order'
import orderItem from './schemas/orderItem'
import { customerType } from './schemas/customer'

export const schemaTypes = [productType, categoryType, orderType, orderItem, customerType]


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, orderType, orderItem, customerType],

}
