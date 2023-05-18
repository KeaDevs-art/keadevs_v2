import { useState } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import "./side-content.styles.scss";

// ---------------- imports ------------------ imports ----

const SideContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="side-content">
      <div className="mode">
        {isDarkMode ? (
          <LightModeIcon onClick={toggleMode} />
        ) : (
          <DarkModeIcon onClick={toggleMode} />
        )}
      </div>
      <div className="content">
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
          <h3>
            <span>&bull;</span> &bull; &bull; &bull; &bull;
          </h3>
        </div>
      </div>
      <h1>&#8476;</h1>
    </div>
  );
};
export default SideContent;
