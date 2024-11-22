// Module imports -------------------------------

import { useLoaderData, useNavigation } from "react-router";

// Component imports ----------------------------

import Icon from "../../components/Icon/Icon";
import Bannerarea from "../../components/Bannerarea/Bannerarea";

// Type and enum imports -----------------------

import { Linkinter } from "../../components/Link/Link";
import { ThemesEnum } from "../../main";

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

import sendImage from "../../scripts/sendImage";
import fetchImage from "../../scripts/fetchImage";

const LinksPage = (
  {}:{}
) => {

  const currentNavigation = useNavigation();
  const loadedData: linksPageDataInter = useLoaderData() as linksPageDataInter;

  if (currentNavigation.state !== "idle") return (<h1> Loading... </h1>);
  
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

  if (loadedData !== null && loadedData !== undefined) {
    theme = (loadedData.lightMode) ? ThemesEnum.lightTheme : ThemesEnum.darkTheme;
    socialLinks = loadedData.socialLinks;
    displayName = loadedData.displayName;
    displayImage = loadedData.displayImage;
    subtext = loadedData.subtext;
    links = loadedData.links;
  }

  return (
    <div
    className={
      (theme === ThemesEnum.lightTheme) ? 
      `LinksPage 
      
      bg-customBlack 
      text-white
      justify-start

      w-screen
      min-h-screen


      ` :
      `App 
      
      bg-white 
      text-customBlack
      justify-start

      w-screen
      min-h-screen
      `
    }
    >

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
          {/* <Icon theme={theme} platform="youtube" link="https://www.youtube.com/"/>
          <Icon theme={theme} platform="instagram" link="https://www.instagram.com/"/>
          <Icon theme={theme} platform="twitter" link="https://www.twitter.com/"/> */}
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

      {/* <Bannerarea 
      profileImage="../../../public/Images/woman.jpg" 
      name="Anne Frank" 
      subtext="Writer, Blogger, Content Creator"
      theme={theme}
      /> */}
      <Bannerarea 
      profileImage={displayImage}
      name={displayName} 
      subtext={subtext}
      theme={theme}
      links={links}
      />
      {/* <Linkarea LinksArr={[
        {
          icon: "../../../public/SocialIcons/youtube.png", 
          text: "My Youtube Channel", 
          url: "https://www.youtube.com"
        }, 
        {
          icon: "../../../public/SocialIcons/instagram.png", 
          text: "My Instagram Page", 
          url: "https://www.instagram.com"
        }, 
        {
          icon: "../../../public/SocialIcons/twitter.png", 
          text: "My Twitter Profile", 
          url: "https://www.twitter.com"
        }
      ]} theme={theme} /> */}
    </div>
  );
}

export default LinksPage;