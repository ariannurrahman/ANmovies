import React from "react";
import anicon from "../images/icon/an.svg";
import "../styles/about/dist/about.css";
const About = () => {
  const tmdbLogoLink =
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-logo">
          <div className="logo">
            <img src={tmdbLogoLink} alt="tmdb" />
            <p>
              "This product uses the TMDb API but is not endorsed or certified
              by TMDb."
            </p>
          </div>
          <div className="logo">
            <img src={anicon} alt="an" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
