import { client } from "./client"
import { groq } from "next-sanity"
import { CategoryList, ProductAndCategorySlug } from "./types"
import { ProductSingle } from "@/global"

export const generateGetProductsByCategoryQuery = (category: string, maxCount?: number) => {
  const limit = maxCount ? `[0...${maxCount}]` : ''
  return groq`*[_type=="category" && slug.current=='${category.trim()}']{ 'products':*[_type=='product' && references(^._id)]{_id, name, slug,price,Thumbnail,category},slug }`
}

export async function getProductsByCategory(category: string, maxCount?: number) : Promise<ProductAndCategorySlug> {
  
  const productByCategoryQuery = generateGetProductsByCategoryQuery(category, maxCount)
  return await client.fetch(productByCategoryQuery).then(item => {
    return item[0]
  })
}

export type HomepageProducts = {
  windowsData : ProductAndCategorySlug[]
  officeData : ProductAndCategorySlug[]
}

export async function getHomepageProducts(): Promise<HomepageProducts> {

    const query = groq`{
            "windowsData" : *[_type == "category" && slug.current == "windows"] { "products" : *[_type == "product" && references(^._id)] {_id, name, slug, price, Thumbnail, category}, slug}[0...4],
            "officeData" : *[_type == "category" && slug.current == "office-for-windows"] { "products" : *[_type == "product" && references(^._id) ] {_id, name, slug, price, Thumbnail, category}, slug}[0...4]
          }`

    return await client.fetch(query)
}

export const getCategoriesList = async () : Promise<CategoryList[]> => {
  const allCategoriesQuery = groq`*[_type == "category"]{_id, slug, name}`
  return await client.fetch(allCategoriesQuery)

}

export const getSingleProduct = async (productSlug : string):Promise<ProductSingle> => {
  const query = groq`*[_type=="product" && slug.current=="${productSlug}"] {name, slug, _id, Image, price, description,quantity}`

  return await client.fetch(query).then(data => data[0])
}