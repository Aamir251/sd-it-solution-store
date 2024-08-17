import Container from "@/components/globals/Container"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'About Us | SD IT Solution Store',
  description: 'Learn more about SD IT Solution Store. Discover our mission, values, and the team dedicated to providing you with the best IT software solutions like Microsoft Windows and Office.',
}


const AboutUsPage = () => {
  return (
    <Container className="pb-20">
      <div className="py-20 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold">About US</h1>
      </div>

      <article className="space-y-4 leading-7 text-sm max-w-2xl mx-auto">
        <p>At <strong>SD IT Solution</strong>, we specialize in providing essential software solutions tailored to meet the diverse needs of businesses and individuals alike. With a commitment to quality and customer satisfaction, we offer a comprehensive range of products including Microsoft Office, Windows operating systems, Office for Mac, and more.</p>

        <p>
          Our mission is to simplify technology procurement by offering reliable software solutions that empower productivity and efficiency. Whether you&apos;re a small business looking to streamline operations or an individual seeking the latest software tools, SD IT Solution is your trusted partner.
        </p>

        <p>Backed by a team of experienced professionals, we ensure that every purchase is accompanied by excellent customer support and timely assistance. We believe in forging long-term relationships built on trust and reliability.</p>

        <p>Explore our catalog and discover how SD IT Solution can enhance your software experience. Join countless satisfied customers who have made us their preferred choice for quality software solutions.</p>
      </article>
    </Container>
  )
}

export default AboutUsPage