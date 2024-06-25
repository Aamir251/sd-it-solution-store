import type {  ProductBasic } from "@/global"
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image"
import Link from "next/link"
import { Slug } from "sanity";
import AddToCartBtn from "./AddToCartBtn";

type ProductCardProps = ProductBasic

const ProductCard = ({ name, Thumbnail, slug, _id } : ProductCardProps) => {

  const thumbnailUrl = urlForImage(Thumbnail)
  
  return (
    <article className="flex flex-col justify-center items-start py-6 px-3 bg-light-gray max-w-64">
      <figure className="w-full max-w-[200px] h-[190px] relative">
        <Image src={thumbnailUrl} alt={name} layout="fill" style={{ objectFit : "cover" }} />

      </figure>
      <h3 className="mt-7 mb-2 text-black-two font-bold">{name}</h3>
      <div className="flex justify-between w-full items-center mt-2.5 px-2">
        <Link className="btn-black text-sm font-poppins btn-small" href={`/products/${slug.current}`}>
          Buy Now
        </Link>
        <AddToCartBtn imageUrl={thumbnailUrl} _id={_id} name={name} qty={1} slug={slug.current} />
      </div>
    </article>
  )
}

export default ProductCard