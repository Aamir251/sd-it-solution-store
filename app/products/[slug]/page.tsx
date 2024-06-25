import { urlForImage } from "@/sanity/lib/image"
import { getSingleProduct } from "@/sanity/lib/queries"
import Image from "next/image"
import Actions from "../_components/Actions"
import { addComaToNumber } from "@/utils/cart"
import Container from "@/components/globals/Container"

type SingleProductPageProps = {
  params : {
    slug : string
  }
}

const SingleProductPage = async ({ params } : SingleProductPageProps) => {

  const { name, _id, Image : productImage, price, description, quantity, slug } = await getSingleProduct(params.slug)

  const imageUrl = urlForImage(productImage)

  return (
    <Container as="section" className="mt-20">
      
      <article className="grid lg:grid-cols-2 gap-x-10">
        <figure className="relative w-full h-[600px]">
          <Image src={imageUrl} alt={name} style={{ objectFit : "cover"}} layout="fill" />
        </figure>

        <div className="pt-4">
          <h1 className="text-3xl font-bold text-black-two">{name}</h1>
          <h5 className="text-3xl font-bold text-primary-orange mt-2">Rs. {addComaToNumber(price)}</h5>

          <Actions imageUrl={imageUrl} _id={_id} name={name} qty={quantity} slug={slug.current} />
        </div>
      </article>

    </Container>
  )
}


export default SingleProductPage