// Script imports -------------------------------
import resolveAsset from "../../scripts/resolveAsset";

// Other imports --------------------------------
import { ThemesEnum } from "../../main";

interface Linkinter {
    icon?: string, 
    text: string, 
    url: string
}

const Link = (
    {
        data, 
        theme
    }:
    {
        data: Linkinter, 
        theme: ThemesEnum

    }
) => {
    return (
        <a 
        href={data.url}
        className={
        (theme === ThemesEnum.darkTheme) ? 
        `
        Link

        w-screen
        md:w-[50vw]
        md:rounded-md
        min-h-16

        bg-customBlack
        text-white
        z-10
        flex
        flex-row
        justify-start
        items-center
        transition-all
        py-2
        
        hover:scale-105
        `:
        `
        Link

        w-screen
        md:w-[50vw]
        md:rounded-md
        min-h-16

        bg-white
        text-customBlack
        z-10
        flex
        flex-row
        justify-start
        items-center
        transition-all
        py-2

        hover:scale-105
        `
        }>

            <img
            className="
            Linkicon

            mx-10

            size-10
            "
            src={(data.icon !== undefined) ? "data:image/png;base64," + data.icon : ""}
            />

            <div
            className="
            items-start
            flex-grow
            "
            >
                <h1
                className="
                
                mb-1

                font-bold
                text-xl
                leading-none
                text-left
                
                "
                >
                    {data.text}
                </h1>
                <p
                className="
                text-[0.8em]
                font-mono
                text-customGray
                "> 
                    {data.url} 
                </p>
            </div>
        </a>
    );
}

export default Link;
export type { Linkinter };