import * as React from "react"
import Navbar from "../components/Navbar"
import NavbarHeader from "../components/NavbarHeader"
import ToggleVisibility from "../components/ToggleVisibility"
import "../sass/styles.scss"

const IndexPage = () => {
  return (
    <main>
      <NavbarHeader/>
      <ToggleVisibility>
        <Navbar/>
      </ToggleVisibility>      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
