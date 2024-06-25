import Image from "next/image"
import Link from "next/link"
import NavbarLogo from "@/assets/logos/sd-it-logo.svg"

const NavLogo = () => {
  return (
    <Link href={"/"} className="block w-max">
      <figure className="w-max">
        <Image style={{ objectFit: "contain" }} src={NavbarLogo} alt="sd it solutions logo" width={40} height={40} />
      </figure>
    </Link>
  )
}

export default NavLogo