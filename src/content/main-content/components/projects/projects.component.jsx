// import { ProjectsMain, Box } from "./projects.styles";
import "./projects.styles.scss";
import ProjectImg from "../../../../assets/project_1.png";

const Projects = () => {
  return (
    <main className="projects-main">
      <div className="pro">
      <h2>Projects</h2>
      <div className="projects">
        <div className="box header">
          <h3>Pro_1</h3>
          <h3>Pro_2</h3>
          <h3>Pro_3</h3>
          <h3>Pro_4</h3>
        </div>
        <div className="box one">
          <img className="project-image" src={ProjectImg} />
        </div>
        <div className="box two">
          <img className="project-image" src={ProjectImg} />
        </div>
        <div className="box three">
          <img className="project-image" src={ProjectImg} />
        </div>
        <div className="box four">
          <img className="project-image" src={ProjectImg} />
        </div>
      </div>
      </div>
    </main>
  );
};

export default Projects;
