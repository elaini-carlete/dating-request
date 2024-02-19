import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../Button/button"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <div style={{ color: theme.color, background: theme.background }} className="theme-btn">
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}></Button>
        </div>
    )
}