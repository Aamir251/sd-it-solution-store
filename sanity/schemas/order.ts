import {defineField, defineType} from 'sanity'

export const orderType = defineType({
    name: 'orders',
    title: 'Orders',
    type: 'document',
    fields: [
      defineField({
        name : 'orderId',
        title : "Order ID",
        type : 'string',
      }),
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'contact',
        title: 'Contact',
        type: 'number',
      }),
      defineField({
        name: 'items', // the ordered Items
        type: 'array',
        title : "Items",
        of : [
          {
            type : "orderItem"
          }
        ],
      }),
    ],
  })

  // orderId
  // name: string
  // email : string
  // contact : number
  // array of order Items