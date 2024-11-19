
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

// ----------------------------------------------

enum ThemesEnum {
  darkTheme, 
  lightTheme
}

const dummyUserData = {
  username: undefined, 
  // sessionToken: "0cb8dd4857400cd3582b9106ea508023e0593ca4"
  sessionToken: undefined
}

const browserRouter = createBrowserRouter([
  {
    path: "/page", 
    element:  <LinksPage />, 
    loader: async () => {
      const linksPageData = getLinksPageData(dummyUserData.username, dummyUserData.sessionToken);
      if (Object.keys(linksPageData).length === 0) {
        return redirect("/login");
      }
      else return linksPageData;
    } 
  }, 
  {
    path: "/login", 
    element: <LoginPage />, 
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>,
)



export { ThemesEnum };