// React imports --------------------------------

import { useState } from "react";

// Module imports -------------------------------

import { useNavigate } from "react-router";

// ----------------------------------------------

export default function AccountButton(
    {
        profileImage
    }:
    {
        profileImage: string
    }
) {

    const [expandedState, setExpandedState] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <div
        onClick={() => {
            setExpandedState(!expandedState);
        }}

        className="
        AccountButton

        relative

        items-end
        ">
            <img
            src={"data:image/png;base64," + profileImage}
            alt="ProfileImage"
            className={
            (!expandedState) ?
            `            
            ProfileImage

            rounded-full

            w-14
            h-14
            object-cover
            cursor-pointer
            p-[2px]
            transition-all

            hover:scale-105
            hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
            ` :
            `
            ProfileImage

            rounded-full
            scale-105
            shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
            border-2
            border-blue-500
            w-14
            h-14

            object-cover
            cursor-pointer
            p-[2px]
            `
            } />
            
            {
                (expandedState) ? 
                <div
                onClick={() => {
                    navigate("/login");
                }}

                className="
                ExpandedMenu

                shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]

                rounded-lg
                w-32

                overflow-clip
                bg-white
                text-customBlack
                text-sm
                p-2
                absolute
                top-[4.5rem]
                transition-all
                cursor-pointer

                hover:bg-[rgb(220,220,220)]
                ">
                    Switch Account
                </div> :
                <></>
            }
            
        </div>
    );
}