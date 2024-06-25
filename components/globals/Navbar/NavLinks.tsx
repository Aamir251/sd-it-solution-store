import Link from "next/link"
import CartIcon from "./CartIcon"


type LinkItem = {
  name : string
  href : string
}

const links : LinkItem[] = [
  {
    name : "Home",
    href : "/"
  },
  {
    name : "Contact Us",
    href : "/contact-us"
  },
  {
    name : "About Us",
    href : "/about-us"
  },
  
]


const NavLinks = () => {
  return (
    <ul className="flex gap-x-6 items-center">
      {
        links.map(({ href, name }) => <Link className="nav}+link" key={name.toLowerCase()} href={href}>{name}</Link>)
      }

      <CartIcon />
    </ul>
  )
}

export default NavLinks