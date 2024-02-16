import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../Button/button"
import CherryBlossomsDark from "../images/cherry-blossoms-dark.png"
import "../Button/style.css"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <div style={{ color: theme.color, background: theme.background }} className="theme-btn">
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                <img src={CherryBlossomsDark} alt="Image Cherry Blossoms Dark"/>
            </Button>
        </div>
    )
}