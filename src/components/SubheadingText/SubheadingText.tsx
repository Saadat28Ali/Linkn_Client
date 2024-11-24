// Other imports --------------------------------

import { ThemesEnum } from "../../main";

// ----------------------------------------------

export default function SubheadingText(
    {text, theme}:
    {
        text: string, 
        theme: ThemesEnum
    }
) {
    return (
        <p
        className={
        (theme === ThemesEnum.lightTheme) ? 
        `
        mb-5

        text-customBlack
        text-xl
        ` :
        `
        mb-5

        text-white
        text-xl
        `}>
            {text}
        </p>
    );
}