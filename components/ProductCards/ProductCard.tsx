import type { ProductBasic } from "@/global"
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image"
import Link from "next/link"
import AddToCartBtn from "./AddToCartBtn";
import OutOfStockButton from "../ui/OutOfStockButton";

type ProductCardProps = ProductBasic

const ProductCard = ({ name, Thumbnail, slug, _id, quantity, price }: ProductCardProps) => {

  const thumbnailUrl = urlForImage(Thumbnail)

  return (
    <article className="flex flex-col justify-center items-start py-6 px-3 bg-light-gray max-w-full  lg:max-w-64">

      <figure className="w-full h-[340px] sm:h-[320px] lg:h-[200px]   relative">
        <Image src={thumbnailUrl} alt={name} layout="fill" style={{ objectFit: "cover" }} />
      </figure>

      <h3 className="mt-7 mb-2 text-black-two font-bold">{name}</h3>

      {
        quantity === 0 ? <div className="mt-3">
          <OutOfStockButton />
        </div>
          : <div className="flex justify-between w-full items-center mt-2.5 px-2">
            <Link className="btn-black text-sm font-poppins btn-small" href={`/products/${slug.current}`}>
              Buy Now
            </Link>
            <AddToCartBtn
              price={price} imageUrl={thumbnailUrl} _id={_id}
              name={name} qty={1} inStock={quantity} slug={slug.current}
            />
          </div>
      }

    </article>
  )
}

export default ProductCard