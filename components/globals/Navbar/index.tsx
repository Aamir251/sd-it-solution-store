"use client";

import { useState } from "react"
import Container from "../Container"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"
import YoutubeLink from "./YoutubeLink";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  return (
    <header className="py-2 bg-white ">
      <Container as="nav" className="bg-white flex items-center justify-between relative">
        <NavLogo showDropdown={showDropdown} setShowDropdown={setShowDropdown} />

          <div className="absolute right-7 -translate-x-1/2 text-xs top-2.5 block md:hidden">
            <YoutubeLink />
          </div>

        <NavLinks showDropdown={showDropdown} />

      </Container>
    </header>
  )
}

export default Navbar

