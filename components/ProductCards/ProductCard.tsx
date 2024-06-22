import type {  ProductBasic } from "@/global"
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image"
import Link from "next/link"
import { Slug } from "sanity";

type ProductCardProps = ProductBasic & { categorySlug : Slug }

const ProductCard = ({ name, Thumbnail, slug, categorySlug } : ProductCardProps) => {

  const thumbnailUrl = urlForImage(Thumbnail)
  
  return (
    <article className="flex flex-col justify-center items-start py-6 px-3 bg-light-gray max-w-64">
      <figure className="w-full max-w-[200px] h-[190px] relative">
        <Image src={thumbnailUrl} alt={name} layout="fill" style={{ objectFit : "cover" }} />

      </figure>
      <h3 className="mt-7 mb-2 text-black-two font-bold">{name}</h3>
      <Link className="orange-link" href={`/products/${slug.current}`}>
        Buy Now
      </Link>
    </article>
  )
}

export default ProductCard