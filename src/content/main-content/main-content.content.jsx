import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import HomeContent from "./components/home-content/home-content.component";

import { MainContentContainer } from "./main-content.styles";

// --------------- imports ------------- imports --------

function Expertise() {
  return (
    <div>
      <h1>Expertise</h1>
    </div>
  );
}
function Projects() {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}
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
