// Module imports -------------------------------

import axios from "axios";

// ----------------------------------------------

// const serverUrl: string = "http://localhost:3000/";
const serverUrl: string = "https://linkn-server.vercel.app/";

export default function fetchImage(username: string, descriptor: string) {

    console.log(serverUrl);

    return new Promise((resolve, reject) => {
        axios({
            method: "post", 
            url: serverUrl, 
            data: {
                action: "downloadimage", 
                username: username, 
                descriptor: descriptor
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    })
}