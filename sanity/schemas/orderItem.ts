import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'orderItem',
  title: 'OrderItem',
  type: 'object',
  fields: [
    defineField({
      name : "productId",
      title : "Product Id",
      type : 'string'
    }),
    defineField({
      name: 'productName',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    })
  ],
})