// Other imports --------------------------------

import { ThemesEnum } from "../../main";

// ----------------------------------------------

export default function HeadingText(
    {
        text,
        theme
    }:
    {
        text: string
        theme: ThemesEnum
    }
) {
    return (
        <h1
        className={
        (theme === ThemesEnum.lightTheme) ?
        `
        mb-5

        text-customBlack
        text-6xl
        font-bold
        ` :
        `
        mb-5

        text-white
        text-6xl
        font-bold
        `
        }>
            {text}
        </h1>
    );
}