import { urlForImage } from "@/sanity/lib/image"
import { getSingleProduct } from "@/sanity/lib/queries"
import Image from "next/image"
import Actions from "../_components/Actions"
import { addComaToNumber } from "@/utils/cart"
import Container from "@/components/globals/Container"
import OutOfStockButton from "@/components/ui/OutOfStockButton"
import ProductDescription from "../_components/ProductDescription"
import { Metadata, ResolvingMetadata } from "next"

type SingleProductPageProps = {
  params: {
    slug: string
  }
}
export const revalidate = 3600 // revalidate the data at most every hour


export async function generateMetadata(
  { params }: SingleProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  

  const { name } = await getSingleProduct(params.slug)
 
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: name,
  }
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {

  const { name, _id, Image: productImage, price, description, quantity, slug } = await getSingleProduct(params.slug)

  const imageUrl = urlForImage(productImage)


  return (
    <Container as="section" className="mt-20 pb-20 min-h-screen">

      <article className="grid gap-y-10 lg:grid-cols-2 gap-x-10">
        <figure className="relative w-full h-96 lg:h-[600px]">
          <Image src={imageUrl} alt={name} style={{ objectFit: "cover" }} layout="fill" />
        </figure>

        <div className="pt-4">
          <h1 className="text-3xl font-bold text-black-two">{name}</h1>
          <h5 className="text-3xl font-bold text-primary-orange mt-2">Rs. {addComaToNumber(price)}</h5>

          {
            quantity === 0 ? <div className="mt-4">
              <OutOfStockButton />
            </div> : <Actions price={price} inStock={quantity} imageUrl={imageUrl} _id={_id} name={name} qty={quantity} slug={slug.current} />
          }
          {description?.length > 0 && <ProductDescription description={description}  />}
        </div>

      </article>

    </Container>
  )
}


export default SingleProductPage