// Module imports -------------------------------

import axios from "axios";

// ----------------------------------------------

// const serverUrl: string = "http://localhost:3000/"
const serverUrl: string = "https://linkn-server.vercel.app/"

export default function findUser(
    username: string
) {
    return new Promise((resolve, reject) => {
        axios({
            method: "post", 
            url: serverUrl, 
            data: {
                action: "read", 
                collection: "users", 
                username: username
            }
        }).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function checkUserExists(
    username: string
) {
    const foundUser: any = await findUser(username);
    if (foundUser.data === "Action could not be completed, user with provided details was not found.") {
        return false;
    } else return true;
}