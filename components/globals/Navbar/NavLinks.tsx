import Link from "next/link"
import CartIcon from "./CartIcon"
import YoutubeLink from "./YoutubeLink"


type LinkItem = {
  name: string
  href: string
}

const links: LinkItem[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Shop Now",
    href: "/category/office-for-windows"
  },
  {
    name: "Contact Us",
    href: "/contact-us"
  },
  {
    name: "About Us",
    href: "/about-us"
  },

]


type NavLinksProps = {
  showDropdown: boolean
}

const NavLinks = ({ showDropdown }: NavLinksProps) => {

  return (
    <div className={`w-full ${showDropdown ? "block" : "hidden"} md:block absolute left-0 top-[58px] bg-white  md:static md:w-auto z-20 pb-5 md:pb-0`}>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:items-center">
        <div className="hidden md:block">
          <YoutubeLink />
        </div>
        {
          links.map(({ href, name }) => <Link
            className="navlink"
            aria-current="page"
            key={name.toLowerCase()} href={href}>
            {name}
          </Link>)
        }
        <CartIcon />
      </ul>
    </div>
  )
}

export default NavLinks