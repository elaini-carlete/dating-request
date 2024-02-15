import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import './style.css'

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return(
        <button className="btn" {...props} style={{ src: theme.src,  backgroundColor: theme.background}}></button>
    )
}