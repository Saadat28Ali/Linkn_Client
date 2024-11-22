// React imports --------------------------------

import { useState, useEffect } from "react";

// ----------------------------------------------

export default function FormTextInput(
    {
        id, 
        type, 
        placeholder, 
        label, 
        incorrectInputState, 
        setIncorrectInputState
    }:
    {
        id: string, 
        type: string, 
        placeholder: string, 
        label: string, 
        incorrectInputState: boolean, 
        setIncorrectInputState: Function
    }
) {

    // const [ignoreIncorrectInput, setIgnoreIncorrectInput] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div
        className="
        FormTextInput

        w-full

        items-start

        ">
            <label htmlFor={id}
            className={(incorrectInputState) ? `
            select-none
            text-sm
            text-red-400
            ` : `
            select-none
            text-sm
            text-customGray
            `}
            > {label} </label>
            
            <div
            className="
            w-full
            

            flex-row
            justify-start
            "
            >
                <input type={
                    (["text", "password", "email"].includes(type)) ? 
                        (type === "password") ? 
                            (!showPassword) ? 
                                "password" :
                                "text"
                        : type 
                    : "text"} 
                id={id} placeholder={placeholder}
                onChange={() => {
                    setIncorrectInputState(false);
                }}

                className={(incorrectInputState) ? `
                    my-2
                    -mx-2
                    w-full
                    rounded-lg
                    outline-none
                    outline-red-500
                    focus:outline-blue-500

                    text-xl
                    p-2
                    
                ` : `
                    my-2
                    -mx-2
                    w-full
                    rounded-lg
                    outline-none
                    focus:outline-blue-500
                    
                    text-xl
                    p-2
                `} />
                
                {(type === "password") ? 
                    <span
                    onClick={() => {
                        setShowPassword((oldShowPassword: boolean) => {return !oldShowPassword;})
                    }}

                    className={(showPassword) ? `
                    ml-5
                    w-12

                    text-customGray
                    select-none
                    underline
                    cursor-pointer

                    ` : `
                    ml-5
                    w-12

                    text-blue-500
                    select-none
                    font-bold
                    underline
                    cursor-pointer
                    `}>
                        {(showPassword) ? "Hide" : "Show"}
                    </span>
                    :
                    <></>
                }
                
            </div>

        </div>
    );
}