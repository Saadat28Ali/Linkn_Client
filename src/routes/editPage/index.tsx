// Enum imports ---------------------------------

import { ThemesEnum } from "../../main";

// Component imports ----------------------------

import HeadingText from "../../components/HeadingText/HeadingText";

// ----------------------------------------------

const EditPage = (
    {
        theme
    }:
    {
        theme: ThemesEnum
    }
) => {

    return (
        <div
        className={
        (theme === ThemesEnum.darkTheme) ? 
        `
        EditPage

        w-screen
        h-screen

        bg-customBlack

        ` :
        `
        EditPage

        w-screen
        h-screen

        bg-white
        `
        }>
            <HeadingText text={"Edit links"} theme={theme} />
        </div>
    );
}

export default EditPage;