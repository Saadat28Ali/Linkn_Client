// React imports
import { useState } from "react";

// Component imports ----------------------------
import Icon from "./components/Icon/Icon";
import Bannerarea from "./components/Bannerarea/Bannerarea";
import Linkarea from "./components/Linkarea/Linkarea";

enum ThemesEnum {
  darkTheme, 
  lightTheme
}

const App = (
  {
    theme
  }:
  {
    theme: ThemesEnum
  }
) => {

  return (
    <div
    className={
      (theme === ThemesEnum.lightTheme) ? 
      `App 
      
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
          <Icon theme={theme} platform="youtube" link="https://www.youtube.com/"/>
          <Icon theme={theme} platform="instagram" link="https://www.instagram.com/"/>
          <Icon theme={theme} platform="twitter" link="https://www.twitter.com/"/>
        </div>
      </header>

      <Bannerarea 
      profileImage="../../../public/Images/woman.jpg" 
      name="Anne Frank" 
      subtext="Writer, Blogger, Content Creator"
      theme={theme}
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

export default App;
export {ThemesEnum};