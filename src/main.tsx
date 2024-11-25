
// React imports --------------------------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Asset imports --------------------------------

import './index.css'

// Module imports -------------------------------

import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

// Loader imports -------------------------------

import getLinksPageData from './scripts/loaders/linksPageLoader.ts';
import getEditPageData from './scripts/loaders/editPageLoader.ts';

// Script imports -------------------------------

import { readFromLocalStorage } from './scripts/localStorage.ts';
import unhashToken from './scripts/unhashToken.ts';

// Component imports ----------------------------

import LinksPage from './routes/linksPage/index.tsx'
import LoginPage from './routes/loginPage/index.tsx';
import RootPage from './routes/rootPage/index.tsx';
import EditPage from "./routes/editPage/index.tsx";

// ----------------------------------------------

enum ThemesEnum {
  darkTheme, 
  lightTheme
}

// const dummyUserData = {
//   username: "John Doe", 
//   // sessionToken: "0cb8dd4857400cd3582b9106ea508023e0593ca4"
//   sessionToken: undefined
// }

const currentUserData: {
  username: string, 
  token: string | null
} = {
  username: "",
  token: readFromLocalStorage("token")
}

const browserRouter = createBrowserRouter([
  {
    path: "/", 
    element: <RootPage />, 
    children: [
      // {
      //   path: "/page", 
      //   element:  <LinksPage />, 
      //   loader: async () => {

      //     // Using session token to find the username if the username is not
      //     // available and session token is

      //     if (currentUserData.token !== null && currentUserData.username === "")  {
      //       const unhashedData: any = await unhashToken(currentUserData.token);
      //       if (unhashedData.data === "Action could not be completed, user with provided details was not found.") {
      //       } else {
      //         currentUserData.username = unhashedData.data.token.username;
      //       }

      //     }

      //     // Using the username to fetch links data, if the username is not 
      //     // available, it redirects to the login page

      //     let linksPageData: any = null;
      //     if (currentUserData.username !== "") {
      //       linksPageData = await getLinksPageData(currentUserData.username, undefined);
      //     } else return redirect("/login");

      //     if (Object.keys(linksPageData).length === 0) {
      //       return redirect("/login");
      //     } else return linksPageData;
      //   } 
      // }, 
      // {
      //   path: "/login", 
      //   element: <LoginPage userDataVar={currentUserData} theme={ThemesEnum.darkTheme}/>, 
      // }, 
      {
        path: "/page/:username", 
        element: <LinksPage />, 
        // loader: async () => {

        //   // Using session token to find the username if the username is not
        //   // available and session token is

        //   // if (currentUserData.token !== null && currentUserData.username === "")  {
        //   //   const unhashedData: any = await unhashToken(currentUserData.token);
        //   //   if (unhashedData.data === "Action could not be completed, user with provided details was not found.") {
        //   //   } else {
        //   //     currentUserData.username = unhashedData.data.token.username;
        //   //   }
        //   // }

        //   // Using the username to fetch links data, if the username is not 
        //   // available, it redirects to the login page

        // //   let linksPageData: any = null;
        // //   if (currentUserData.username !== "") {
        // //     linksPageData = await getLinksPageData(currentUserData.username, undefined);
        // //   } else return redirect("/login");

        // //   if (Object.keys(linksPageData).length === 0) {
        // //     return redirect("/login");
        // //   } else return linksPageData;
        // // }
        // }
      }, 
      {
        path: "/edit", 
        element: <EditPage theme={ThemesEnum.darkTheme} />, 
      }, 
      {
        path: "/login", 
        element: <LoginPage userDataVar={currentUserData} theme={ThemesEnum.darkTheme}/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>,
)



export { ThemesEnum };