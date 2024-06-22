
import Container from "@/components/globals/Container"
import HeroBackgroundImage from "./HeroBackgroundImage"
import Link from "next/link"

const HeroHeader = () => {
  return <div className="relative" >
    <Container as='section'>
      <article className='home-hero-bg w-full h-[85vh] flex-center flex-col text-white'>
        <h1 className='text-6xl'>SD IT Solutions</h1>
        <p className="mt-4">Get latest Office and Windows at Affordable Prices</p>

        <Link href={`/category/windows`} className="mt-4 btn-primary">
          Shop Now
        </Link>
      </article>
    </Container>
    <HeroBackgroundImage />

  </div>
}

export default HeroHeader