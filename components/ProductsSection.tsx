import { Slug } from "sanity";
import Container from "./globals/Container"
import { ProductBasic } from "@/global";
import ProductCards from "./ProductCards";


type ProductsSectionProps = {
  products: ProductBasic[];
  categorySlug: Slug
  className?: string
  heading: string

}

const ProductsSection = ({ heading, className, ...props }: ProductsSectionProps) => {
  return (
    <Container as="section" className={`py-20 ${className}`}>
      <h2 className="text-3xl font-semibold text-black-one mb-8">{heading}</h2>
      <ProductCards {...props} />
    </Container>
  )
}

export default ProductsSection