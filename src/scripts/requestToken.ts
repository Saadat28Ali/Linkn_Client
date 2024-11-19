// Module imports -------------------------------

import axios from "axios";

// ----------------------------------------------

// const serverUrl: string = "http://localhost:3000/";
const serverUrl: string = "https://linkn-server.vercel.app/";

export default async function requestToken(username: string) {
    axios({
        method: "post", 
        url: serverUrl, 
        data: {
            action: "requesttoken", 
            username: username, 
        }
    }).then((response) => {
        return response;
    });
}