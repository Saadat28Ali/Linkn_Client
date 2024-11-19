// Script imports -------------------------------

import resolveAsset from "../../scripts/resolveAsset";

// Other imports --------------------------------

import { ThemesEnum } from "../../main";

// ----------------------------------------------

const excludedFromRounding = ["youtube"];

const Icon = (
    {
        platform, 
        link, 
        theme
    }:
    {
        platform: string, 
        link: string
        theme: ThemesEnum
    }
) => {

    let holdTimeout: number;

    const mouseDownEventCallback = () => {
        holdTimeout = window.setTimeout(() => {
            console.log("Icon Held Down");
            window.navigator.clipboard.writeText(link);
        }, 1000);
    }

    const mouseUpEventCallback = () => {
        window.clearTimeout(holdTimeout);
    }


    return (
        <a
        href={link}
        target="_blank"
        onMouseDown={mouseDownEventCallback}
        onMouseUp={mouseUpEventCallback}
        className={
        (theme === ThemesEnum.lightTheme) ?
        `
        Icon

        rounded-full

        bg-white
        
        text-customBlack
        transition-all

        hover:shadow-[0px_0px_40px_2px_rgba(0,0,0,0.5)]
        `:
        `
        Icon

        rounded-full

        bg-customBlack

        text-white
        transition-all

        hover:shadow-[0px_0px_40px_2px_rgba(0,0,0,0.5)]
        `
        }>
            <img
            src={
                (platform.toLowerCase() === "youtube") ? resolveAsset("Images/SocialIcons/youtube.png") : 
                (platform.toLowerCase() === "instagram") ? resolveAsset("Images/SocialIcons/instagram.png") :
                (platform.toLowerCase() === "twitter") ? resolveAsset("Images/SocialIcons/twitter.png") : 
                ""
            }
            alt={platform}
            className={
            (!excludedFromRounding.includes(platform)) ?
            `
            IconImage

            rounded-full

            size-24

            p-5
            `:
            `
            IconImage

            size-24

            p-5
            `
            }>

            </img>

        </a>
    );
}

export default Icon;