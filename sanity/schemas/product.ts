import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source : "name",

      }
    }),
    defineField({
      title : "Category",
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'quantity',
      type: 'number',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: "block" }]
    }),
    defineField( {
      name : "Image",
      type : "image",
      title : "Main Image"
    }),
    defineField( {
      name : "Thumbnail",
      type : "image",
      title : "Thumbnail Image"
    })

  ],
})