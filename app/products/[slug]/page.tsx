import { urlForImage } from "@/sanity/lib/image"
import { getSingleProduct } from "@/sanity/lib/queries"
import Image from "next/image"
import QuantityDropdown from "../_components/QuantityDropdown"
import ActionButtons from "../_components/ActionButtons"
import Actions from "../_components/Actions"


type SingleProductPageProps = {
  params : {
    slug : string
  }
}


const SingleProductPage = async ({ params } : SingleProductPageProps) => {

  const { name, _id, Image : productImage, price, description, quantity, slug } = await getSingleProduct(params.slug)

  const imageUrl = urlForImage(productImage)

  return (
    <section>
      
      <article className="grid lg:grid-cols-2">
        <figure className="relative w-full h-96">
          <Image src={imageUrl} alt={name} style={{ objectFit : "cover"}} layout="fill" />
        </figure>

        <div>
          <h1>{name}</h1>
          <h5>{price}</h5>

          <Actions _id={_id} quantity={quantity} slug={slug} />
        </div>
      </article>

    </section>
  )
}


export default SingleProductPage