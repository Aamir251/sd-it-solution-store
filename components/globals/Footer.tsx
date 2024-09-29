import Image from "next/image"
import Link from "next/link"
import YoutubeIcon from "@/assets/icons/youtube.svg"

const Footer = () => {
  return (

    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">

      <div className="w-full max-w-screen-xl mx-auto p-4 py-8 md:py-14 text-sm mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
      <YoutubeLink />
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-6 ">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline me-4 md:me-6">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">Contact Us</Link>
            </li>

          </ul>

          <ul className="flex flex-wrap gap-x-6 gap-y-6 mt-6 md:mt-0">
            <li>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">Terms And Conditions</Link>
            </li>
            <li>
              <Link href="/cancellation-and-refund-policy" className="hover:underline">Cancellation And Refund</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()}
          <Link href="/" className="hover:underline"> SDITSolutions</Link>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

export default Footer


function YoutubeLink() {
  return (
    <Link target="_blank" href={"https://www.youtube.com/@s.ditsolution"} className="flex gap-x-2 items-center hover:opacity-80 py-1.5 mb-5 w-max">
      <Image src={YoutubeIcon} alt="sd it solution youtube channel" width={30} height={30} />
      <span className="text-red-400">
        S.D It Solution
      </span>
    </Link>
  )
}