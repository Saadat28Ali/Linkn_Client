// Module imports -------------------------------

import axios from "axios";

// Script imports -------------------------------

import fetchImage from "./fetchImage";
import unhashToken from "./unhashToken";

// ----------------------------------------------

const serverUrl: string = "https://linkn-server.vercel.app/";
// const serverUrl: string = "http://localhost:3000/";

export default async function getLinksPageData(username?: string, sessionToken?: string) {

    // Checking if username is available

    if (username !== undefined) {
    } else {

        // Checking if sessionToken is available

        let unhashedToken: any = null;
        
        if (sessionToken !== undefined) {
            unhashedToken = await unhashToken(sessionToken);
        } else return {};

        if (unhashedToken.data === "Action could not be completed, user with provided details was not found.") {
            // Token is either invalid or does not exist
            return {};
        } else {
            // Token is valid and does exist
            username = unhashedToken.data.username;
        }
    }

    if (username !== undefined) {
        const userlinksSearchResult = await axios(
            {
                method: "post", 
                url: serverUrl, 
                data: {
                    action: "read", 
                    collection: "userlinks", 
                    username: username, 
                }
            }
        ) as any;
    
        const displayImageSearchResult = await fetchImage(username, "displayImage") as any;
    
        let result = {...userlinksSearchResult.data};
        result["displayImage"] = displayImageSearchResult;
        return result;
    }
    return {};
}