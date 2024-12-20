// React imports --------------------------------

import { FormEvent, useEffect, useState } from "react";

// Module imports -------------------------------

import { useNavigate } from "react-router";

// Script imports -------------------------------

import login from "../../scripts/login";
import { readTheme, writeTheme } from "../../scripts/theme";

// Enum imports --------------------------------

import { ThemesEnum } from "../../main";
import { headingTextSizes } from "../../components/HeadingText/HeadingText";

// Component imports ----------------------------

import FormTextInput from "../../components/FormTextInput/FormTextInput";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import HeadingText from "../../components/HeadingText/HeadingText";
import SubheadingText from "../../components/SubheadingText/SubheadingText";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

// ----------------------------------------------

export default function LoginPage(
    {
        userDataVar, 
    }:
    {
        userDataVar: {
            username: string
        }, 
    }
) {
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useState<boolean>(false);

    const [incorrectUsernameState, setIncorrectUsernameState] = useState<boolean>(false);
    const [incorrectPasswordState, setIncorrectPasswordState] = useState<boolean>(false);

    const themeInStorage: number | null = readTheme();
    const [theme, setTheme] = useState<ThemesEnum>((themeInStorage === null) ? ThemesEnum.lightTheme : themeInStorage);
    useEffect(() => {
        writeTheme(theme);
    }, [theme]);

    return (
        <div
        className={
        (theme === ThemesEnum.lightTheme) ?
        `
        LoginPage
        
        w-screen
        h-screen

        text-customBlack
        bg-white
        ` :
        `
        LoginPage

        w-screen
        h-screen

        bg-customBlack
        text-white
        `}>
            <span
            className="
            TopRightFloatingSpan

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
            </span>


            <section
            className="
            w-full
            
            flex
            flex-col
            justify-between
            items-start
            md:items-center
            pl-20
            md:pl-0
            ">


                <div
                className="
                leftSection

                items-start
                md:items-center
                ">

                    <HeadingText text={"Login"} theme={theme} size={headingTextSizes.medium}/>
{/* 
                    <p
                    className="
                    mb-5

                    text-customBlack
                    text-xl
                    ">
                        Already a user? Sign up
                    </p> */}

                    <SubheadingText text={"Already a user? Sign up"} theme = {theme} />

                </div>
                <div
                className="
                rightSection
                ">
                    <form
                    onSubmit={async (event: FormEvent) => {
                        event.preventDefault();

                        const usernameElem: HTMLInputElement | null = document.querySelector("#usernameTextInput");
                        const passwordElem: HTMLInputElement | null = document.querySelector("#passwordTextInput");
                        const rememberMeElem: HTMLInputElement | null = document.querySelector("#rememberMeCheckboxInput");

                        if (usernameElem !== null && passwordElem !== null && rememberMeElem !== null) {
                            setLoadingState(true);
                            const credentialsCheckResult: number = await login(usernameElem.value, passwordElem.value, rememberMeElem.checked, userDataVar);
                            if (credentialsCheckResult === 0) {
                                navigate("/edit");
                            } else if (credentialsCheckResult === 1) {
                                setIncorrectUsernameState(true);
                            } else if (credentialsCheckResult === 2) {
                                setIncorrectPasswordState(true);
                            }
                        }

                        setLoadingState(false);

                        // console.log((event.target as HTMLElement).children);
                    }}
                    className="
                    flex
                    flex-col
                    items-start
                    justify-center
                    ">
                        <FormTextInput 
                        id="usernameTextInput" 
                        placeholder="Username..." 
                        type="text" 
                        label="Username" 
                        incorrectInputState={incorrectUsernameState}
                        setIncorrectInputState={setIncorrectUsernameState}
                        />

                        <FormTextInput 
                        id="passwordTextInput" 
                        placeholder="Password..." 
                        type="password" 
                        label="Password" 
                        incorrectInputState={incorrectPasswordState}
                        setIncorrectInputState={setIncorrectPasswordState}
                        />

                        <div
                        className="
                        w-full
                        mt-4

                        flex
                        flex-row
                        items-center
                        justify-start
                        ">
                            <input type="checkbox" id="rememberMeCheckboxInput" 
                            className="
                            h-5
                            w-5
                            " />
                            <label htmlFor="rememberMeCheckboxInput"
                            className={
                            (theme === ThemesEnum.lightTheme) ?
                            `
                            ml-2
                            -mt-1

                            text-customBlack
                            select-none
                            ` : 
                            `
                            ml-2
                            -mt-1

                            text-white
                            select-none
                            `}> Remember me </label>
                        </div>

                        <button type="submit"
                        className="
                        rounded-lg
                        mt-8
                        mb-4
                        h-12
                        
                        p-3
                        bg-blue-500
                        w-full
                        font-bold
                        text-white
                        flex
                        flex-row
                        justify-center
                        items-center
                        "> {(loadingState) ? <LoadingIndicator /> : "Log in"} </button>

                        <p
                        className="
                        w-full
                        h-10

                        text-red-500
                        text-center
                        ">
                            {
                            (incorrectUsernameState) ? 
                            "Incorrect username, please try again." :
                            (incorrectPasswordState) ?
                            "Incorrect password, please try again." :
                            ""
                            }
                        </p>
                    </form>
                </div>
            </section>

        </div>
    );
}