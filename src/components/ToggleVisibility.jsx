import * as React from "react"
import { useState } from "react"
import "../sass/styles.scss"
import ChevronDown from "../svgs/ChevronDown"
import ChevronUp from "../svgs/ChevronUp"

const ToggleVisibility = ({children}) => {
    const [show, setShow] = useState();
    function toggleShow(){
        setShow(!show)
    }

    let chevron =  show ? <ChevronUp className = "chevron"/> : <ChevronDown className = "chevron"/>
    return(
        <div>
            {show && children}
            <div onClick={toggleShow}>{chevron}</div>
        </div>
    )
}

export default ToggleVisibility