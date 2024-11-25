// React imports --------------------------------

import { useState, useEffect } from "react";

// Module imports -------------------------------

import { useParams } from "react-router";

// Script imports -------------------------------

import getLinksPageData from "../../scripts/loaders/linksPageLoader";

// Type and enum imports ------------------------

import { Linkinter } from "../../components/Link/Link";
import { ThemesEnum } from "../../main";

// Component imports ----------------------------

import Icon from "../../components/Icon/Icon";
import Bannerarea from "../../components/Bannerarea/Bannerarea";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

// ----------------------------------------------

interface socialLinksInter {
  instagram: string, 
  youtube: string, 
  twitter: string, 
}

interface linksPageDataInter {
  username: string, 
  displayImage: string, 
  displayName: string, 
  subtext: string, 
  socialLinks: socialLinksInter, 
  links: Array<Linkinter>, 
  lightMode: boolean, 
  token: any
}

const LinksPage = (
  {}:{}
) => {

  const { username } = useParams();
  const [linksData, setLinksData] = useState<any>({});
  const [loadingState, setLoadingState] = useState<boolean>(false);

  useEffect(() => {
    async function getLinksData() {
      setLoadingState(true);

      const data = await getLinksPageData(username);
      setLinksData(data);

      setLoadingState(false);
    }
    getLinksData();
  }, []);

  let theme: ThemesEnum = ThemesEnum.darkTheme;
  let socialLinks: socialLinksInter = {
    instagram: "", 
    twitter: "", 
    youtube: ""
  };
  let displayName: string = "";
  let displayImage: string = "";
  let subtext: string = "";
  let links: Array<Linkinter> = [];

  if (linksData !== null && linksData !== undefined && Object.keys(linksData).length > 0) {
    theme = (linksData.lightMode) ? ThemesEnum.lightTheme : ThemesEnum.darkTheme;
    socialLinks = linksData.socialLinks;
    displayName = linksData.displayName;
    displayImage = linksData.displayImage;
    subtext = linksData.subtext;
    links = linksData.links;
  }

  return (
    <div
    className={
      (loadingState) ? "LinksPage" : (
        (theme === ThemesEnum.lightTheme) ? 
        `LinksPage 
        
        bg-customBlack 
        text-white
        justify-start

        w-screen
        min-h-screen


        ` :
        `LinksPage
        
        bg-white 
        text-customBlack
        justify-start

        w-screen
        min-h-screen
        `
      )
    }>
      {(loadingState) ? <LoadingPage /> : (
        <>
          <header
          className="
          w-screen
          flex
          justify-center
          ">
            <div
            className={
            (theme === ThemesEnum.lightTheme) ? 
            `
            Iconbar
    
            shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
            md:shadow-none
    
            bg-white
            md:bg-transparent
            flex-row
            p-10
            items-center
            text-customBlack
            absolute
            z-20
    
            h-8
            w-screen
            md:w-2/4
    
            *:scale-50
            `:
            `
            Iconbar
    
            shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]
            md:shadow-none
    
            bg-customBlack
            md:bg-transparent
            text-white
            flex-row
            p-10
            items-center
            absolute
            z-20
            
            h-8
            w-screen
            md:w-2/4
    
            *:scale-50
            `}>
              {
                Object.keys(socialLinks).map((platform: string, index: number) => {
                  return (
                    <Icon theme={theme} platform={platform} key={index} link={
                      (socialLinks[platform as keyof socialLinksInter] !== undefined) ? socialLinks[platform as keyof socialLinksInter] : ""
                    } />
                  );
                })
              }
            </div>
          </header>

          <Bannerarea 
          profileImage={displayImage}
          name={displayName} 
          subtext={subtext}
          theme={theme}
          links={links}
          />
        </>
      )}

    </div>
  );
}

export default LinksPage;