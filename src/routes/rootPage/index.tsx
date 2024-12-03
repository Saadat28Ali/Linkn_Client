// React imports --------------------------------

import { Suspense } from "react";

// Module imports -------------------------------

import { Outlet } from "react-router";

// Component imports ----------------------------

import LoadingPage from "../../components/LoadingPage/LoadingPage";


// ----------------------------------------------


export default function RootPage() {
    return (
        <div
        className="
        RootPage
        ">
            <Suspense fallback={<LoadingPage />}>
                {/* {(navigation.state !== "idle") ? <LoadingPage /> : <Outlet />} */}
                <Outlet />
            </Suspense>

        </div>
    );
}