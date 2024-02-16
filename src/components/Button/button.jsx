import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import './style.css'
import CherryBlossomsLight from "../images/cherry-blossoms-light.png"

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return(
        <button className="btn" {...props} style={{ color: theme.color, background: theme.background, boxShadow: theme.boxShadow }}>
            <img src={CherryBlossomsLight} alt="Image Cherry Blossoms Light" />
        </button>
    )
}