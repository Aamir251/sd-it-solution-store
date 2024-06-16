import { PropsWithChildren } from "react"
import HeroSection from "./_components/HeroSection"
import ProductsCategorySideBar from "./_components/ProductsCategorySideBar"
import Container from "@/components/globals/Container"


const ProducsByCategoryPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container as="div">
      <HeroSection />

      <ProductsCategorySideBar />

      
    </Container>
  )
}

export default ProducsByCategoryPageLayout