import Image from "next/image"
import Link from "next/link"
import NavbarLogo from "@/assets/logos/sd-it-logo.png"
import { Dispatch, SetStateAction } from "react"
import CloseNavIcon from "@/assets/icons/nav-close.svg"

type NavLogoProps = {
  setShowDropdown: Dispatch<SetStateAction<boolean>>
  showDropdown: boolean
}


const NavLogo = ({ setShowDropdown, showDropdown }: NavLogoProps) => {

  return (
    <div className="flex justify-between w-full md:w-max">
      <Link href={"/"}>
        <figure className="w-max">
          <Image style={{ objectFit: "contain" }} src={NavbarLogo} alt="sd it solutions logo" width={90} height={90} />

        </figure>
      </Link>

      <button onClick={() => {
        setShowDropdown(prev => !prev)
      }} data-collapse-toggle="navbar-default" type="button" className="outline-none border-none md:hidden"  aria-controls="navbar-default" aria-expanded="false">
        {
          showDropdown ? <Image src={CloseNavIcon} alt="close navbar" width={30} height={30} /> : <div className="outline-none">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </div>
        }
      </button>
    </div>
  )
}

export default NavLogo