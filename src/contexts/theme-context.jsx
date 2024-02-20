import { createContext, useState } from "react";

export const themes = {
    light: {
        background: '#93a5d4',
        color: '#d87093',
        boxShadow: '2px 2px 10px 5px #D87093'
    },
    dark: {
        background: '#2f3042',
        color: '#000000',
        boxShadow: '2px 2px 10px 5px #000000'
    }
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