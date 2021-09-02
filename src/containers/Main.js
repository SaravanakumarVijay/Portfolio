import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import {StyleProvider} from "../contexts/StyleContext";
import {Fade} from "react-reveal";
import "./Main.scss";
import SplashScreen from "./splashScreen/splashScreen";
import {splashScreen} from "../portfolio";


const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  
  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
      setIsDark(JSON.parse(localStorage.getItem("isDark")));
    const splashTimer = setTimeout(() => setIsShowingSplashAnimation(false), splashScreen.duration)
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);


  const changeTheme = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    // Update local storage as soon as isDark changes
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider
        value={{isDark: isDark, changeTheme: changeTheme}}
      >
        {isShowingSplashAnimation && splashScreen.enabled ?
          <SplashScreen /> :
          <Fade bottom duration={500} distance="40px">
            <Header />
            <Greeting />
            <Skills />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Twitter />
            <Profile />
            <Footer />
            <Top />
          </Fade>
        }
      </StyleProvider>
    </div>
  );
};
export default Main;