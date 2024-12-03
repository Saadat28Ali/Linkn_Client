// Module imports -------------------------------

import axios from "axios";

// Interface imports ----------------------------

import { Linkinter } from "../components/Link/Link";

// ----------------------------------------------

const serverUrl: string = "https://linkn-server.vercel.app/";

export default async function updateUserLinks(username: string, subtext: string, socialLinks: Array<any>, links: Array<Linkinter>) {
    return new Promise((resolve, reject) => {
        axios({
            method: "post", 
            url: serverUrl, 
            data: {
                action: "update", 
                collection: "userlinks", 
                username: username, 
                subtext: subtext, 
                socialLinks: socialLinks, 
                links: links, 
            }
        }).then((result: any) => {
            console.log("Result from updating user links");
            resolve(result);
        }).catch((error:any) => {
            console.log("Axios Error while updating User Links");
            reject(error);
        });
    });
}