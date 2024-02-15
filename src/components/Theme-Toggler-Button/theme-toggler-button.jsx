import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../Button/button"
import './style.css'

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <div className="btn-theme">
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>IMG</Button>
        </div>
    )
}