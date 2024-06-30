import { defineField, defineType } from "sanity";

export const customerType = defineType({
    name : "customers",
    title : "Customers",
    type : "document",
    fields : [
        defineField({
            name : 'name',
            title : "Name",
            type : 'string',
            readOnly : true,
        }),
        defineField({
            name : 'email',
            title : "Email",
            type : 'string',
            readOnly : true,
        }),
        defineField({
            name : 'contact',
            title : "Contact",
            type : 'number',
            readOnly : true,
        }),
        defineField({
            name : 'discountEligibility',
            title : "Discount",
            type : 'number',
            initialValue : 0
        })
    ]
})