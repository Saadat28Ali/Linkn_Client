// React imports --------------------------------

import { useState, useEffect, FormEvent } from "react";

// Module imports -------------------------------

import { useLoaderData } from "react-router";

// Script imports -------------------------------

import { writeTheme, readTheme } from "../../scripts/theme";

// Enum imports ---------------------------------

import { ThemesEnum } from "../../main";
import { headingTextSizes } from "../../components/HeadingText/HeadingText";

// Interface imports ----------------------------

import { Linkinter } from "../../components/Link/Link";

// Component imports ----------------------------

import HeadingText from "../../components/HeadingText/HeadingText";
import AccountButton from "../../components/AccountButton/AccountButton";
import FormTextInput from "../../components/FormTextInput/FormTextInput";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import Icon from "../../components/Icon/Icon";
import EditableLinkArea from "../../components/EditableLinkArea/EditableLinkArea";

// ----------------------------------------------

interface socialLinksInter {
    instagram: string, 
    youtube: string, 
    twitter: string, 
}

enum PreviewViewport {
    Desktop, 
    Mobile
}

const EditPage = (
    {}:
    {}
) => {

    const loaderData = useLoaderData() as any;
    // const navigate = useNavigate();
    const [submitButtonLoadingState, setSubmitButtonLoadingState] = useState<boolean>(false);
    const [theme, setTheme] = useState<ThemesEnum>(ThemesEnum.darkTheme);
    const [previewViewport, setPreviewViewport] = useState<PreviewViewport>(PreviewViewport.Desktop);
    const [modifiedUserData, setModifiedUserData] = useState<any>({...loaderData});

    useEffect(() => {
        const themeInStorage: number | null = readTheme();
        if (themeInStorage !== null) setTheme(themeInStorage as ThemesEnum);
    }, []);

    useEffect(() => {
        writeTheme(theme);
    }, [
        theme
    ]);

    useEffect(() => {
        console.log("HERE");
    }, [modifiedUserData]);

    function updatePreview() {
        const subtextTextInput: HTMLInputElement | null = document.querySelector("#SubtextTextInput");
        setModifiedUserData((oldModifiedUserData: any) => {
            let newModifiedUserData = {...oldModifiedUserData};
            if (subtextTextInput !== null) newModifiedUserData.subtext = subtextTextInput.value;
            return newModifiedUserData;
        });
    }

    return (
        <div
        className={
        (theme === ThemesEnum.darkTheme) ? 
        `
        EditPage

        w-screen
        min-h-screen
        lg:h-screen

        bg-customBlack
        flex-col
        justify-start
        lg:flex-row
        lg:justify-evenly

        ` :
        `
        EditPage

        w-screen
        min-h-screen
        lg:h-screen

        bg-white
        flex-col
        justify-start
        lg:flex-row
        lg:justify-evenly

        `
        }>
            <section
            className="
            EditingSection
            
            w-full
            h-full

            flex
            flex-col
            justify-start
            items-center
            ">
                <span
                className="
                TopLeftFloatingSpan

                absolute
                top-5
                right-5
                z-10
                flex
                flex-row
                items-center
                justify-end
                ">
                    <ThemeButton theme={theme} setTheme={setTheme} />
                    <span className="Spacer w-2"></span>
                    <AccountButton profileImage={loaderData.displayImage} />
                </span>

                <div className="Spacer w-full h-16" />

                <HeadingText text={"Edit links"} theme={theme} size={headingTextSizes.small} />

                <form id="EditLinksForm" onSubmit={(event: FormEvent) => {
                    event.preventDefault();
                }}
                className="

                w-[70%]

                flex
                flex-col
                items-center
                ">

                    <input 
                    id="profileImageInput" 
                    type="file"
                    accept="image/*"
                    onChange={(event: any) => {
                        const image = event.target.files[0];
                        const reader: FileReader = new FileReader();
                        reader.readAsDataURL(image);
                        reader.onload = () => {
                            setModifiedUserData((oldModifiedUserData: any) => {
                                let newModifiedUserData = {...oldModifiedUserData};
                                newModifiedUserData.displayImage = (reader.result as string).slice(22, (reader.result as string).length);
                                return newModifiedUserData;
                            });
                        }

                    }}
                    className={
                    (theme === ThemesEnum.darkTheme) ?
                    `
                    my-5
                    
                    text-white
                    ` :
                    `
                    my-5

                    text-customBlack
                    `
                    }/>

                    <FormTextInput 
                    id="SubtextTextInput" 
                    type="text" 
                    placeholder="Subtext" 
                    label="Subtext" 
                    OnChange={() => {updatePreview()}}
                    defaultValue={modifiedUserData.subtext}
                    incorrectInputState={false}
                    setIncorrectInputState={() => {}}
                    />
                    
                    <EditableLinkArea linksArr={modifiedUserData.links.map((linkObj: any) => {
                        return (
                            {
                                icon: linkObj.icon, 
                                text: linkObj.text, 
                                url: linkObj.url
                            } as Linkinter
                        );
                    })} setLinksArr={(newLinksArr: Array<Linkinter>) => {
                        console.log(newLinksArr);
                        modifiedUserData.links = [...newLinksArr];
                        // console.log("HERE");
                    }} OnChange={() => {updatePreview()}}/>


                    <div
                    className="
                    ButtonsDiv

                    mb-4
                    h-12
                    w-full

                    flex-row
                    justify-between
                    gap-2
                    ">
                        <button
                        onClick={(event: any) => {
                            updatePreview();
                        }}
                        className="
                        rounded-lg
                        h-full
                        w-full
                        
                        p-3
                        bg-white
                        font-bold
                        text-customBlack
                        flex
                        flex-row
                        justify-center
                        items-center
                        "> {(submitButtonLoadingState) ? <LoadingIndicator /> : "Update"} </button>

                        <button type="submit"
                        className="
                        rounded-lg
                        h-full
                        w-full
                        
                        p-3
                        bg-blue-500
                        font-bold
                        text-white
                        flex
                        flex-row
                        justify-center
                        items-center
                        "> {(submitButtonLoadingState) ? <LoadingIndicator /> : "Submit"} </button>
                    </div>

                </form>

            </section>

            <section
            className="
            PreviewSection
            
            w-full
            h-full
            border-l-2
            border-dotted
            border-customGray

            bg-customBlack
            flex
            flex-col
            justify-start
            items-center
            relative
            text-white
            ">  
                
                <div
                className="
                w-full
                
                py-5
                bg-customBlack
                ">
                    <HeadingText text={"Preview"} theme={ThemesEnum.darkTheme} size={headingTextSizes.medium}/>
                    <p onClick={
                        () => {
                            setPreviewViewport(
                                (oldPreviewViewport: PreviewViewport) => {
                                    if (oldPreviewViewport === PreviewViewport.Mobile) return PreviewViewport.Desktop;
                                    else if (oldPreviewViewport === PreviewViewport.Desktop) return PreviewViewport.Mobile;
                                    return PreviewViewport.Mobile;
                                }
                            )
                        }
                    } className="
                    underline
                    text-white
                    cursor-pointer
                    select-none
                    "
                    > {PreviewViewport[previewViewport].toString()} </p>
                </div>
                
                <div
                className={
                (previewViewport === PreviewViewport.Mobile) ?
                    ((theme === ThemesEnum.darkTheme) ?
                    `
                    PreviewArea

                    w-[45vh]
                    h-full
                    m-5
                    
                    relative
                    bg-customBlack
                    justify-start
                    ` :
                    `
                    PreviewArea

                    w-[45vh]
                    h-full
                    m-5
                    
                    relative
                    bg-white
                    justify-start
                    `) :
                    ((theme === ThemesEnum.darkTheme) ? 
                    `
                    PreviewArea

                    w-full
                    h-[30vw]
                    
                    relative
                    bg-customBlack
                    justify-start
                    ` :
                    `
                    PreviewArea

                    w-full
                    h-[30vw]
                    
                    relative
                    bg-white
                    justify-start
                    `)
                }>
                    
                    <header
                    className={
                    (previewViewport === PreviewViewport.Mobile) ?
                        ((theme === ThemesEnum.darkTheme) ? `
                        w-full

                        flex
                        justify-center
                        absolute
                        top-0
                        z-20
                        bg-customBlack

                        ` : 
                        `
                        w-full

                        flex
                        justify-center
                        absolute
                        top-0
                        z-20
                        bg-white

                        `) :
                        `
                        w-full

                        flex
                        justify-center
                        absolute
                        top-0
                        z-20
                        bg-transparent
                        `
                    }>
                        <div
                        className={
                        (theme === ThemesEnum.lightTheme) ? 
                        `
                        Iconbar
                
                        shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
                        md:shadow-none
                
                        flex-row
                        p-8
                        items-center
                        text-customBlack
                
                        h-3
                        w-full
                        z-20
                
                        *:scale-50
                        `:
                        `
                        Iconbar
                
                        shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]
                        md:shadow-none
                
                        text-white
                        flex-row
                        p-8
                        items-center
                        
                        h-3
                        w-full
                        z-20
                
                        *:scale-50
                        `}>
                        {
                            Object.keys(modifiedUserData.socialLinks).map((platform: string, index: number) => {
                            return (
                                <Icon theme={theme} platform={platform} key={index} link={
                                (modifiedUserData.socialLinks[platform as keyof socialLinksInter] !== undefined) ? modifiedUserData.socialLinks[platform as keyof socialLinksInter] : ""
                                } />
                            );
                            })
                        }
                        </div>
                    </header>

                    <img 
                    src={"data:image/png;base64," + modifiedUserData.displayImage} 
                    className={
                    (previewViewport === PreviewViewport.Desktop) ?
                    `
                    BannerImage

                    absolute
                    w-full
                    h-full
                    object-cover
                    z-0
                    ` :
                    `
                    BannerImage

                    absolute
                    w-full
                    h-full
                    object-cover
                    z-0
                    `} />

                    <div
                    className="
                    Name

                    w-full


                    z-10
                    backdrop-blur-md
                    text-center
                    flex
                    items-center
                    justify-start
                    flex-grow
                    ">

                        <div className="min-h-20 w-full"></div>

                        <img
                        src={"data:image/png;base64," + modifiedUserData.displayImage}
                        className={
                        (previewViewport === PreviewViewport.Desktop) ?
                        `
                        ProfileImage

                        w-[7em]
                        h-[7em]
                        rounded-full
                        
                        object-cover
                        transition-all

                        hover:scale-105
                        ` :
                        `
                        ProfileImage

                        mt-5

                        w-[10em]
                        h-[10em]
                        rounded-full
                        
                        object-cover
                        transition-all

                        hover:scale-105
                        `
                        }/>

                        {/* <HeadingText text={modifiedUserData.displayName} theme={ThemesEnum.darkTheme} /> */}
                        <h1
                        className={
                        (previewViewport === PreviewViewport.Desktop) ?
                        `
                        mb-2

                        text-white
                        text-3xl
                        font-bold
                        ` :
                        `
                        mb-2

                        text-white
                        text-5xl
                        font-bold
                        `}>
                            {modifiedUserData.displayName}
                        </h1>
                        {/* <SubheadingText text={(modifiedUserData.subtext) ? modifiedUserData.subtext : ""} theme={ThemesEnum.darkTheme} /> */}
                        <p
                        className={
                        (previewViewport === PreviewViewport.Mobile) ?
                        `
                        text-white
                        text-md
                        ` :
                        `
                        text-white
                        text-lg
                        `}>
                            {modifiedUserData.subtext}
                        </p>
                        
                        {/* <div className="min-h-5 w-full"></div> */}

                        <div
                        className="
                        Linkarea

                        w-full
                        h-full
                        
                        gap-1
                        justify-end
                        py-5
                        ">
                            {modifiedUserData.links.map((link: Linkinter, index: number) => {
                                return (
                                    // <Link data={link} key={index} theme={theme} />
                                    <a 
                                    key={index}
                                    href={link.url}
                                    className={
                                    (previewViewport === PreviewViewport.Mobile) ?
                                        ((theme === ThemesEnum.darkTheme) ? 
                                        `
                                        Link
                                
                                        w-full
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
                                
                                        w-full
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
                                        `) 
                                    :   ((theme === ThemesEnum.darkTheme) ?
                                        `
                                        Link
                                
                                        w-[50%]
                                        min-h-16
                                        rounded-lg
                                
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
                                        ` :
                                        `
                                        Link
                                
                                        w-[50%]
                                        min-h-16
                                        rounded-lg
                                
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
                                        )

                                    }>
                            
                                        <img
                                        className="
                                        Linkicon
                            
                                        mx-5
                            
                                        size-5
                                        "
                                        src={(link.icon !== undefined) ? "data:image/png;base64," + link.icon : ""}
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
                                            text-md
                                            leading-none
                                            text-left
                                            "
                                            >
                                                {link.text}
                                            </h1>
                                            <p
                                            className="
                                            text-[0.7em]
                                            font-mono
                                            text-customGray
                                            "> 
                                                {link.url} 
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
    
}

export default EditPage;