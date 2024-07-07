import { ProductBasic } from "@/global"
import ProductCard from "./ProductCard"
import { Slug } from "sanity"
import Link from "next/link"

type ProductCards = {
  products: ProductBasic[],
  categorySlug: Slug
}

const ProductCards = ({ products, categorySlug }: ProductCards) => {
  return (
    <>
      <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 ">
        {
          products && products.map(product => <ProductCard
            key={product._id}
            {...product}
          />)
        }
      </div>
      <div className="flex justify-center w-max mx-auto">
        <Link className="btn-bottom-border mt-10 mx-auto w-max" href={`/category/${categorySlug.current}`}>View All</Link>
      </div>
    </>
  )
}

export default ProductCards