
import Container from "@/components/globals/Container"
import HeroBackgroundImage from "./HeroBackgroundImage"
import Button from "@/components/ui/Button"

const HeroHeader = () => {
  return <div className="relative" >
    <Container as='section'>
      <article className='home-hero-bg w-full h-[85vh] flex-center flex-col text-white'>
        <h1 className='text-6xl'>SD IT Solutions</h1>
        <p className="mt-4">Get latest Office and Windows at Affordable Prices</p>

        <Button variant="primary" as='link' className="mt-4">
          Shop Now
        </Button>
      </article>
    </Container>
    <HeroBackgroundImage />

  </div>
}

export default HeroHeader