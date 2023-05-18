import Navigation from "./components/navigation/navigation.component";
import HomeContent from "./components/home-content/home-content.component";

import { MainContentContainer } from "./main-content.styles";

// --------------- imports ------------- imports --------

const MainContent = () => {
  return (
    <MainContentContainer>
      <Navigation />
      <HomeContent />
    </MainContentContainer>
  );
};

export default MainContent;
