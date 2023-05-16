import { useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Img from "./assets/Meet_Photographic_Artist_Tim_Tadder_-_LA_Weekly-removebg-preview.png";
import "./App.scss";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="app">
      <div className="side-nav">
        {isDarkMode ? (
          <LightModeIcon onClick={toggleMode} />
        ) : (
          <DarkModeIcon onClick={toggleMode} />
        )}
        <div className="side-content">
          <div>
            <h1>
              kea.devs_<sup>&copy;</sup>{" "}
            </h1>
            <p>
              <i>ChasserLePlaisir, hors caméra</i>
            </p>
          </div>
          <div>
            <h2>こんにちは</h2>
            <h3>&bull; &bull; &bull; &bull; &bull;</h3>
          </div>
        </div>
        <h1>&#8476;</h1>
      </div>
      <div className="content">
        <header>
          <h3>lookbook</h3>
          <div>
            <h3>home</h3>
            <h3>expertise</h3>
            <h3>projects</h3>
            <h3>contact</h3>
          </div>
        </header>
        <main>
          <section>
            <p>LA Lives</p>
            <p>2023 Copyright</p>
            <div className="window">
              <a href="#">&rarr;</a>
            </div>
            <img src={Img} />
          </section>
          <section className="another">
            <h1>Hello</h1>
            <div>
              <GitHubIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
