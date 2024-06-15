import type { Image } from "sanity"

type Reference = {
    current : string
    _type : "slug"
}


type ProductCardType = {
    id : string
    Thumbnail : Image
    name : string
    slug : Reference
    categorySlug : Reference

}

