// Other imports --------------------------------

import { ThemesEnum } from "../../main";

// Component imports ----------------------------

import Linkarea from "../Linkarea/Linkarea";
import HeadingText from "../../components/HeadingText/HeadingText";
import SubheadingText from "../../components/SubheadingText/SubheadingText";

// Type imports ---------------------------------

import { Linkinter } from "../Link/Link";

// ----------------------------------------------

const Bannerarea = (
    {
        profileImage, 
        name, 
        subtext,
        theme, 
        links
    }:
    {
        profileImage?: string, 
        name: string, 
        subtext?: string, 
        theme: ThemesEnum, 
        links: Array<Linkinter>
    }
) => {
    return (
        <section
        className={`
        Bannerarea

        flex
        flex-col
        justify-center
        items-center
        relative
        overflow-hidden
        `}
        >
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
            min-h-screen

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

                "
                />
{/* 
                <h1
                className="
                drop-shadow-[0px_0px_20px_rgba(0,0,0,1)]

                mb-2

                text-white
                text-6xl
                font-bold
                ">
                    {name}
                </h1> */}

                <HeadingText text={name} color={"light"} />

                {/* <p
                className="
                drop-shadow-[0px_0px_20px_rgba(0,0,0,1)]

                text-white
                text-xl
                ">
                    {subtext}
                </p> */}

                <SubheadingText text={(subtext) ? subtext : ""} color={"light"} />
                <div className="min-h-20 w-screen"></div>
                <Linkarea theme={theme} LinksArr={links}/>
            </div>
        </section>

        

    );
}

export default Bannerarea;