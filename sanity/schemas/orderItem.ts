import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: 'orderItem',
  title: 'OrderItem',
  type: 'object',
  fields: [
    defineField({
      name : "productId",
      title : "Product Id",
      type : 'string',
      readOnly : true
    }),
    defineField({
      name: 'productName',
      title: 'Name',
      type: 'string',
      readOnly : true
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      readOnly : true
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      readOnly : true
    })
  ],
})