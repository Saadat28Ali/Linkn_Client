// Script imports -------------------------------

import findUser from "./findUser";
import { writeToLocalStorage } from "./localStorage";
import requestToken from "./requestToken";

// ----------------------------------------------

export default async function login(
    username: string, 
    password: string, 
    rememberMe: boolean, 
    userDataVar: {
        username: string
    }
) {
    // Returns 0 if the user is found and the password is correct
    // Returns 1 if the user is not found (the username is incorrect)
    // Returns 2 if the user is found but the password is incorrect

    const foundUser: any = await findUser(username);

    if (foundUser.data === "Action could not be completed, user with provided details was not found.") {
        // User does not exist

        console.log("The user does not exist");
        userDataVar.username = "";
        return 1;

    } else {
        // User does exist

        // Checking credentials
        
        if (foundUser.data.username === username && foundUser.data.password === password) {
            // Credentials are correct
            
            if (rememberMe) {
                const token = await requestToken(username);
                writeToLocalStorage("token", token.data);
            }

            console.log("Logged in");
            userDataVar.username = username;

            return 0;
        } else {
            // Credentials are incorrect

            console.log("Incorrect credentials");
            userDataVar.username = "";
            return 2;
        }
    }
}