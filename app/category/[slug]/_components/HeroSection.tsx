import LogosCollection from "@/assets/images/logos-collection.png"
import Image from "next/image"


const HeroSection = () => {
  return (
      <article className="flex justify-between items-center py-20">
        <h1 className="text-4xl font-semibold">Shop the best softwares</h1>

        <figure className="hidden md:block relative h-44 w-60">
          <Image 
            src={LogosCollection} 
            alt="shop best softwares"
            layout="fill"
            objectFit="contain"
          />
        </figure>
      </article>

  )
}

export default HeroSection