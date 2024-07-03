import { PropsWithChildren } from "react"
import HeroSection from "./_components/HeroSection"
import ProductsCategorySideBar from "./_components/ProductsCategorySideBar"
import Container from "@/components/globals/Container"



type Props = PropsWithChildren<{
  params : {
    slug : string
  }
}>

const ProducsByCategoryPageLayout = ({ children, params }: Props) => {

  const category = params.slug

  return (
    <Container as="div">
      <HeroSection />

      <section className="flex flex-col lg:flex-row gap-x-10 pb-14">
        <ProductsCategorySideBar categoryParam={category}  />
        <div className="products-cards-wrapper mt-6 lg:mt-0">
          {children}
        </div>
      </section>
      
    </Container>
  )
}

export default ProducsByCategoryPageLayout