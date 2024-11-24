// Module imports -------------------------------

import { useLoaderData } from "react-router";

// Component imports ----------------------------

import HeadingText from "../../components/HeadingText/HeadingText";

// ----------------------------------------------

const EditPage = (
    {}:
    {}
) => {

    const loaderData: null = useLoaderData() as null;

    return (
        <div
        className="EditPage"
        >
            <HeadingText text={"Edit links"} color={"dark"} />
        </div>
    );
}

export default EditPage;