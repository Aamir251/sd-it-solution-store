"use client";

import { useState } from "react"
import Container from "../Container"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  return (
    <header className="py-2 bg-white">
      <Container as="nav" className="bg-white flex items-center justify-between ">
        <NavLogo showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
        <NavLinks showDropdown={showDropdown} />

      </Container>
    </header>
  )
}

export default Navbar

