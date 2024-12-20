// Module imports -------------------------------

import axios from "axios";

// ----------------------------------------------

// const serverUrl: string = "http://localhost:3000/";
const serverUrl: string = "https://linkn-server.vercel.app/";

export default function unhashToken(token: string) {
    return new Promise<any>((resolve, reject) => {
        axios({
            method: "post", 
            url: serverUrl, 
            data: {
                action: "findtoken", 
                token: token, 
            }
        }).then((response: any) => {resolve(response);
        }).catch((error: any) => {reject(error)});
    });
    
}