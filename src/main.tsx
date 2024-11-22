
// React imports --------------------------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Asset imports --------------------------------

import './index.css'

// Module imports -------------------------------

import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

// Loader imports

import getLinksPageData from './scripts/linksPageLoader.ts';

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

const dummyUserData = {
  username: "John Doe", 
  // sessionToken: "0cb8dd4857400cd3582b9106ea508023e0593ca4"
  sessionToken: undefined
}

const currentUserData: {
  username: string
} = {
  username: ""
}

const browserRouter = createBrowserRouter([
  {
    path: "/", 
    element: <RootPage />, 
    children: [
      {
        path: "/page", 
        element:  <LinksPage />, 
        loader: async () => {
          let linksPageData: any = null;
          if (currentUserData.username !== "") {
            linksPageData = await getLinksPageData(currentUserData.username, undefined);
          } else return redirect("/login");
    
          if (Object.keys(linksPageData).length === 0) {
            return redirect("/login");
          } else return linksPageData;
        } 
      }, 
      {
        path: "/login", 
        element: <LoginPage userDataVar={currentUserData} />, 
      }, 
      {
        path: "/edit", 
        element: <EditPage />
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