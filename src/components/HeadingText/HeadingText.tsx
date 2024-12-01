// Other imports --------------------------------

import { ThemesEnum } from "../../main";

// ----------------------------------------------

export enum headingTextSizes {
    small, 
    medium,
    large
}

export default function HeadingText(
    {
        text,
        theme, 
        size
    }:
    {
        text: string
        theme: ThemesEnum, 
        size: headingTextSizes
    }
) {
    return (
        <h1
        className={
        (theme === ThemesEnum.lightTheme) ?
        `
        mb-5

        text-customBlack
        font-bold
        ` :
        `
        mb-5

        text-white
        font-bold
        `
        } style={{
            fontSize:   (size === headingTextSizes.small) ? "2.25rem" :
                        (size === headingTextSizes.medium) ? "3.75rem":
                        (size === headingTextSizes.large) ? "6rem" : "default", 
        }}>
            {text}
        </h1>
    );
}