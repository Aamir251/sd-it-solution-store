import Container from "../Container"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"

const Navbar = () => {
  return (
    <Container as="nav" className="py-2 flex items-center justify-between">
      <NavLogo />
      <NavLinks />
    </Container>
  )
}

export default Navbar