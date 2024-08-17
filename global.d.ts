import type { Image, Id } from "sanity"
import { HomePageQueryResult, Slug } from "./sanity.types"




type Reference = {
  current: string
  _type: "slug"
}

type Product = {
  _id: Id
  name: string
  slug: Slug
  price: number
  quantity: number
  Thumbnail: Image
  Image: Image
  description: ProductDescription
  category: Reference
}

type ProductSingle = Omit<Product, "Thumbnail" | "category">

type ProductBasic = Omit<Product, "description" | "Image">




type ProductDescription = {
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}[]


type SessionStorageCartItem = {
  slug: string
  _id: string
  qty: number
}