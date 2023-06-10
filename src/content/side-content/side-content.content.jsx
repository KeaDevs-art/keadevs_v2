import { ThemeMode } from "../../components/theme-mode/theme-mode.component";

import "./side-content.styles.scss";

// ---------------- imports ------------------ imports ----

const SideContent = () => {

  return (
    <div className="side-content">
      <ThemeMode />
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
