import HeroImage from "@/assets/images/home-hero.png"
import Image from "next/image"

const HeroBackgroundImage = () => {
  return (
    <figure className='w-full h-full absolute top-0 left-0 -z-10'>
      <Image src={HeroImage} alt='Sd It Solutions' className='w-full h-full object-cover' />
    </figure>
  )
}

export default HeroBackgroundImage