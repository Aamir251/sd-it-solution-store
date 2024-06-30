import { defineField, defineType } from 'sanity'

export const orderType = defineType({
  name: 'orders',
  title: 'Orders',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: "Order ID",
      type: 'string',
      readOnly: true,

    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      readOnly: true
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'number',
      readOnly: true
    }),
    defineField({
      name: 'isDelivered',
      title: 'Is Delivered',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'items', // the ordered Items
      type: 'array',
      title: "Items",
      of: [
        {
          type: "orderItem"
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