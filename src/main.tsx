
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
    loader: async ({ request }) => {
      const url = new URL(request.url);
      if (url.pathname === "/") {
        return redirect("/edit");
      }
      return null;
    }, 
    children: [
      {
        path: "/page/:username", 
        element: <LinksPage />, 
      }, 
      {
        path: "/edit", 
        element: <EditPage />, 
        loader: async () => {
          if (currentUserData.username !== "") {
            // username already exists
            // console.log("Edit Page Loader Function/Case: Username already exists", currentUserData.username);

          } else if (currentUserData.token !== null) {
            // session token exists
            // console.log("Edit Page Loader Function/Case: Session Token already exists", currentUserData.token);
            
            const unhashedResult = await unhashToken(currentUserData.token);
            if (unhashedResult.data === "Action could not be completed, user with provided details was not found.") {
              // invalid token
              // console.log("Edit Page Loader Function/Case: Session Token is invalid");
              return redirect("/login");

            } else {
              // valid token
              // console.log("Edit Page Loader Function/Case: Session Token is valid");
              currentUserData.username = unhashedResult.data.username;
            }
            
            // console.log("Edit Page Loader Function/Case: Token Unhashed", unhashedResult);

          } else {
            // neither username nor session token exists

            return redirect("/login");
          }

          // Username already exists or has been found
          // using the session token

          // console.log("Edit Page Loader Function/Case: Username has been resolved, loading data");
          const editPageData = getEditPageData(currentUserData.username);
          return editPageData;
        }
      }, 
      {
        path: "/login", 
        element: <LoginPage userDataVar={currentUserData} />
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