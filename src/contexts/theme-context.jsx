import { createContext, useState } from "react";
import CherryBlossomsLight from "../components/images/cherry-blossoms-light.png"
import CherryBlossomsDark from "../components/images/cherry-blossoms-dark.png"

export const themes = {
    light: {
        src: {CherryBlossomsLight},
        background: '#93a5d4'
    },
    dark: {
        src: {CherryBlossomsDark},
        background: '#000000'
    },
} 

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}