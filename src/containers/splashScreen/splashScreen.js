import React, {useContext} from "react";
import "./splashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen () {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container" }>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <a href="/" className="splash-logo">
        <span className="grey-color"> &lt;</span>
        <span className="splash-logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>
    </div>
  )
}