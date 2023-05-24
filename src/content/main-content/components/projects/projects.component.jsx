// import { ProjectsMain, Box } from "./projects.styles";
import ProjectOne from "../../../../assets/resapp.jpg";
import ProjectTwo from "../../../../assets/budget.webp";
import ProjectThree from "../../../../assets/NewsHomePage.jpeg";
import ProjectFour from "../../../../assets/InstrumentoPage.jpeg";
import "./projects.styles.scss";

const Projects = () => {
  return (
    // trust me I'm not proud
    // shitiest code I've ever written!
    <main className="projects-main">
      <h2>Explore the latest in my collection</h2>
      <div className="pro">
        <div className="projects">
          <div className="box one">
            <img className="project-image" src={ProjectOne} />
          </div>
          <div className="box two">
            <img className="project-image" src={ProjectTwo} />
          </div>
          <div className="box three">
            <img className="project-image" src={ProjectThree} />
          </div>
          <div className="box four">
            <img className="project-image" src={ProjectFour} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
