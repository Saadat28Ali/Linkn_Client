// React imports --------------------------------

import { FormEvent, useState } from "react";

// Module imports -------------------------------

import { useNavigate } from "react-router";

// Script imports -------------------------------

import login from "../../scripts/login";

// Component imports ----------------------------

import FormTextInput from "../../components/FormTextInput/FormTextInput";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

// ----------------------------------------------

export default function LoginPage(
    {
        userDataVar
    }:
    {
        userDataVar: {
            username: string
        }
    }
) {
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useState<boolean>(false);

    const [incorrectUsernameState, setIncorrectUsernameState] = useState<boolean>(false);
    const [incorrectPasswordState, setIncorrectPasswordState] = useState<boolean>(false);

    return (
        <div
        className="
        LoginPage
        
        w-screen
        h-screen
        ">
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
                    <h1
                    className="
                    mb-5

                    text-customBlack
                    text-6xl
                    font-bold
                    ">
                        Login
                    </h1>
                    <p
                    className="
                    mb-5

                    text-customBlack
                    text-xl
                    ">
                        Already a user? Sign up
                    </p>
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
                                navigate("/page");
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
                        {/* <label htmlFor="usernameTextInput"
                        className="
                        select-none
                        text-sm
                        text-customGray
                        "> Username </label>
                        <input type="text" id="usernameTextInput" placeholder="Username..."
                        className="
                        my-2
                        -mx-2
                        rounded-lg

                        text-xl
                        p-2
                        "/>

                        <label htmlFor="passwordTextInput"
                        className="
                        select-none
                        text-sm
                        text-customGray
                        "> Password </label>
                        <input type="password" id="passwordTextInput" placeholder="Password..."
                        className="
                        my-2
                        -mx-2
                        rounded-lg

                        text-xl
                        p-2
                        "/> */}

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
                            className="
                            ml-2
                            -mt-1

                            text-customBlack
                            select-none

                            "> Remember me </label>
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