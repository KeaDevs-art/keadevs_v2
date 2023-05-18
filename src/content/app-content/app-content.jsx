import MainContent from "../main-content/main-content.content";
import SideContent from "../side-content/side-content.content";

import "./app-content.styles.scss";

// ------------------- imports ------------- imports ----

const AppContent = () => {
  return (
    <div className="app">
      <SideContent />
      <MainContent />
    </div>
  );
};

export default AppContent;
