// Enum imports ---------------------------------

import { ThemesEnum } from "../../main";

// ----------------------------------------------

export default function ThemeButton(
    {
        theme, 
        setTheme
    }:
    {
        theme: ThemesEnum, 
        setTheme: Function
    }
) {
    return (
        <div
        onClick={() => {
            if (theme === ThemesEnum.darkTheme) setTheme(ThemesEnum.lightTheme);
            else if (theme === ThemesEnum.lightTheme) setTheme(ThemesEnum.darkTheme);
        }}

        className={
        (theme === ThemesEnum.lightTheme) ?
        `
        ThemeButton

        rounded-xl
        w-12
        h-12

        bg-white
        text-customBlack
        text-2xl
        font-bold
        select-none
        transition-all

        hover:scale-105
        hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.2)]
        active:scale-95

        ` :
        `
        Theme Button
        
        rounded-xl
        w-12
        h-12

        bg-customBlack
        text-white
        text-2xl
        font-bold
        select-none
        transition-all

        hover:scale-105
        hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
        active:scale-95

        `}>
            &#9788;
        </div>
    );
}