// Other imports --------------------------------

import { ThemesEnum } from "../../main";

// Component imports ----------------------------

import Linkarea from "../Linkarea/Linkarea";
import HeadingText from "../../components/HeadingText/HeadingText";
import SubheadingText from "../../components/SubheadingText/SubheadingText";
import ThemeButton from "../ThemeButton/ThemeButton";

// Type imports ---------------------------------

import { Linkinter } from "../Link/Link";

// ----------------------------------------------

const Bannerarea = (
    {
        profileImage, 
        name, 
        subtext,
        theme, 
        setTheme, 
        links
    }:
    {
        profileImage?: string, 
        name: string, 
        subtext?: string, 
        theme: ThemesEnum, 
        setTheme: Function, 
        links: Array<Linkinter>
    }
) => {
    return (
        <section
        className={`
        Bannerarea

        w-full
        h-screen

        flex
        flex-col
        justify-center
        items-center
        relative
        overflow-hidden
        `}
        >
            <span
            className="
            TopRightFloatingSpan

            absolute
            top-4
            right-5
            z-20
            flex
            flex-row
            items-center
            justify-end
            ">
                <ThemeButton theme={theme} setTheme={setTheme} />   
            </span>

            <img 
            src={"data:image/png;base64," + profileImage} 
            className="
            BannerImage

            absolute
            w-full
            "
            />

            <div
            className="
            Name

            w-full
            h-full

            z-10
            backdrop-blur-md
            text-center
            flex
            items-center
            justify-start
            flex-grow
            ">

                <div className="min-h-32 w-screen"></div>

                <img
                src={"data:image/png;base64," + profileImage}
                className="
                ProfileImage

                w-[10em]
                h-[10em]
                rounded-full
                
                object-cover
                transition-all

                hover:scale-105

                "
                />

                <HeadingText text={name} theme={ThemesEnum.darkTheme} />
                <SubheadingText text={(subtext) ? subtext : ""} theme={ThemesEnum.darkTheme} />
                <div className="min-h-20 w-screen"></div>
                <Linkarea theme={theme} LinksArr={links}/>
            </div>
        </section>

        

    );
}

export default Bannerarea;