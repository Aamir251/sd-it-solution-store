import Container from "@/components/globals/Container"
import MailIcon from "@/assets/icons/mail.svg"
import CallIcon from "@/assets/icons/call.svg"
import LocationIcon from "@/assets/icons/map.svg"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const revalidate = 1800 // revalidate the data at most 30 minutes


export const metadata: Metadata = {
  title: 'Contact Us | SD IT Solution Store',
  description: 'Get in touch with SD IT Solution Store. Contact us for any inquiries, support, or feedback regarding your IT software purchases, including Microsoft Windows and Office.',
}

const ContactUsPage = () => {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl md:text-5xl">Contact Us</h1>
        <p className="mt-2 text-gray-800 font-poppins">Feel free to react us through the following ways</p>
      </div>

      <div className="grid gap-y-10 md:grid-cols-3 gap-x-4 lg:gap-x-12 pb-20">

        <div className="space-y-5 flex flex-col items-center px-4 py-8 bg-gray-100 rounded-md">
          <div className="p-3 bg-gray-300 rounded-full w-max">
            <Image src={MailIcon} alt="mail us" width={45} height={45} />
          </div>
          <div className="flex flex-col space-y-3 text-sm text-center">
            <Link className="hover:text-primary-orange" href={"mailto:sditsolutionstore@gmail.com"}>
              sditsolutionstore@gmail.com
            </Link>
            <Link className="hover:text-primary-orange" href={"mailto:subashdas634@gmail.com"}>
              subashdas634@gmail.com
            </Link>
          </div>
        </div>

        <div className="space-y-5 flex flex-col items-center px-4 py-8 bg-gray-100 rounded-md">
          <div className="p-3 bg-gray-300 rounded-full w-max">
            <Image src={CallIcon} alt="mail us" width={45} height={45} />
          </div>
          <div className="flex flex-col space-y-3 text-sm text-center">
            <Link className="hover:text-primary-orange" href={"tel:917029126580"}>
              +917029126580
            </Link>
          </div>
        </div> 

        <div className="space-y-5 flex flex-col items-center px-4 py-8 bg-gray-100 rounded-md">
          <div className="p-3 bg-gray-300 rounded-full w-max">
            <Image src={LocationIcon} alt="mail us" width={45} height={45} />
          </div>
          <div className="flex flex-col space-y-3 text-sm">
            <p>Bhagat Singh Nagar, Jaigaon</p>
            <p>Dist - Alipurduar</p>
            <p>Pincode - 736182</p>
            <p>West Bengal, India</p>
          </div>
        </div> 
      </div>
    </Container>
  )
}

export default ContactUsPage