import * as React from "react"
import "../sass/styles.scss"
import Logo from "../svgs/Logo"

const NavbarHeader = () => {    
    return(
        <div className="navbar">
            <div className="navbarFlex">
                <Logo className="logo"/>
                <div className="gelfara">
                    Gelfara
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader