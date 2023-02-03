import * as React from "react"
import "../sass/styles.scss"
import NavbarItems from "../components/Navbar"
import NavbarHeader from "../components/NavbarHeader"
import ToggleVisibility from "../components/ToggleVisibility"

const Navbar = () => {
  
  return (
    <div>
      <NavbarHeader/>
      <ToggleVisibility>
        <NavbarItems/>
      </ToggleVisibility>  
    </div>
  )
}

export default Navbar
