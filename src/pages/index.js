import * as React from "react"
import Navbar from "../components/Navbar"

import "../sass/styles.scss"

const IndexPage = () => {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
