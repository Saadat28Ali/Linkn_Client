// Script imports -------------------------------

import { writeToLocalStorage, readFromLocalStorage } from "./localStorage";

// Enum imports ---------------------------------

import { ThemesEnum } from "../main";

// ----------------------------------------------


export function writeTheme(theme = ThemesEnum.darkTheme) {
    writeToLocalStorage("theme", theme.toString());
}

export function readTheme(): number | null {
    const themeInStorage: string | null = readFromLocalStorage("theme");
    return ((themeInStorage === null) ? themeInStorage : parseInt(themeInStorage));
}