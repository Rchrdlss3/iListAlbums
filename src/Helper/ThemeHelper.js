import { darkTheme, lightTheme } from "../Styles/Themes";

export const LIGHT_THEME = "LIGHT_THEME"; export const DARK_THEME = "DARK_THEME";
export const DARK_LOGO_IMAGE = "https://rchrdlss3.github.io/InnovativeRichLogo/darkLogo.png" ; export const LIGHT_LOGO_IMAGE = "https://rchrdlss3.github.io/InnovativeRichLogo/lightLogo.png"

export const checkTheme = () => {
    const currentTheme = localStorage.getItem("THEME")
    switch (currentTheme) {
        case null: 
        localStorage.setItem("THEME",LIGHT_THEME)
        return lightTheme;
        case DARK_THEME:
        return darkTheme;
        case LIGHT_THEME:
        return lightTheme;
    }
}

export const switchTheme = (switched) => {
    if (switched) {
        localStorage.setItem("THEME",DARK_THEME)
        return darkTheme
    } else {
        localStorage.setItem("THEME",LIGHT_THEME)
        return lightTheme
    }
}