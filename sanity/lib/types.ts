import { ProductBasic } from "@/global"
import { Id, Slug } from "sanity"

export type ProductAndCategorySlug = {
  products : ProductBasic[]
  slug : Slug
}

export type CategoryList = {
  _id : Id
  slug : Slug
  name : string
}