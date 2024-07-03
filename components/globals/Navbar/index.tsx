"use client";

import { useState } from "react"
import Container from "../Container"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"

const Navbar = () => {
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false)

  return (
    <Container as="nav" className="py-2 flex items-center justify-between">
      <NavLogo showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      <NavLinks showDropdown={showDropdown} />
    </Container>
  )
}

export default Navbar

