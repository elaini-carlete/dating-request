import { createContext, useState } from "react";
import cherryBlossomsLight from "../components/images/cherry-blossoms-light.png";
import cherryBlossomsDark from "../components/images/cherry-blossoms-dark.png";

export const themes = {
    light: {
        background: '#93a5d4',
        color: '#d87093',
        boxShadow: '2px 2px 10px 5px #D87093',
        src: {cherryBlossomsLight}
    },
    dark: {
        background: '#2f3042',
        color: '#000000',
        boxShadow: '2px 2px 10px 5px #000000',
        src: {cherryBlossomsDark}
    },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children};
        </ThemeContext.Provider>
    )
};