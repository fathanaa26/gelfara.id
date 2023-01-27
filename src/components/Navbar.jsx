import * as React from "react"
import "../sass/styles.scss"

const item = [
  "Collaboration",
  "Article",
  "Research",
  "About"
]

const Navbar = () => {
  
  return (
    <div className="navbar">
        <div className="navbarItem">
            <p>{item[0]}</p>
            <p>{item[1]}</p>
            <p>{item[2]}</p>
            <p>{item[3]}</p>
        </div>
    </div>
  )
}

export default Navbar
