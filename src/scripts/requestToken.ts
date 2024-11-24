// Module imports -------------------------------

import axios from "axios";

// ----------------------------------------------

// const serverUrl: string = "http://localhost:3000/";
const serverUrl: string = "https://linkn-server.vercel.app/";

export default function requestToken(username: string) {
    return new Promise<string | any>((resolve, reject) => {
        axios({
            method: "post", 
            url: serverUrl, 
            data: {
                action: "requesttoken", 
                username: username, 
            }
        }).then((response) => {
            resolve(response);
        }).catch((error: any) => {
            reject(error);
        });
    })
    
}