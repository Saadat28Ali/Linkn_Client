// Module imports -------------------------------

import { Outlet, useNavigation } from "react-router";

// Component imports ----------------------------

import LoadingPage from "../../components/LoadingPage/LoadingPage";

// ----------------------------------------------


export default function RootPage() {

    const navigation = useNavigation();

    return (
        <div
        className="
        RootPage
        ">
            {(navigation.state !== "idle") ? <LoadingPage /> : <Outlet />}
        </div>
    );
}