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

        shadow-[0px_0px_20px_2px_rgba(0,0,0,0.2)]
        rounded-xl
        border-2
        border-customBlack
        border-opacity-30
        w-14
        h-14

        absolute
        right-5
        top-5
        z-10
        bg-white
        text-customBlack
        text-2xl
        font-bold
        select-none
        transition-all

        hover:scale-105
        active:scale-95

        ` :
        `
        Theme Button
        
        shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
        rounded-xl
        border-2
        border-white
        border-opacity-30
        w-14
        h-14

        absolute
        right-5
        top-5
        z-10
        bg-customBlack
        text-white
        text-2xl
        font-bold
        select-none
        transition-all

        hover:scale-105
        active:scale-95

        `}>
            &#9788;
        </div>
    );
}