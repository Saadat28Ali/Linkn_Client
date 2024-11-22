// Component imports ----------------------------

import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

// ----------------------------------------------

export default function LoadingPage() {
    return (
        <div
        className="
        LoadingPage
        
        w-screen
        h-screen

        flex
        flex-row
        justify-center
        items-center
        ">
            <span
            className="
            shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]
            rounded-full
            bg-blue-500

            scale-[5]

            "
            >
                <LoadingIndicator />
            </span>

        </div>
    );
}