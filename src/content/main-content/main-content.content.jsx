import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import HomeContent from "./components/home-content/home-content.component";
import Expertise from "./components/expertise/expertise.component";
import Projects from "./components/projects/projects.component";

import { MainContentContainer } from "./main-content.styles";

// --------------- imports ------------- imports --------

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

const MainContent = () => {
  return (
    <MainContentContainer>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeContent />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </MainContentContainer>
  );
};

export default MainContent;
