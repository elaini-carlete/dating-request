import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../Button/button"
import cherryBlossomsLight from "../images/cherry-blossoms-light.png";
import cherryBlossomsDark from "../images/cherry-blossoms-dark.png";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <div style={{ backgroundColor: theme.background }} className="theme-btn">
            <Button
                onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                    <img
                        src={
                            theme === themes.light
                            ? cherryBlossomsLight
                            : cherryBlossomsDark
                        }
                        alt="image-btn-themes"
                    />
            </Button>
        </div>
    )
}