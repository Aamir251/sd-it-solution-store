import Link from "next/link"

const Footer = () => {
  return (

    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 py-8 md:py-14">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-6 text-sm mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline me-4 md:me-6">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cancellation-and-refund-policy" className="hover:underline">Terms And Conditions</Link>
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