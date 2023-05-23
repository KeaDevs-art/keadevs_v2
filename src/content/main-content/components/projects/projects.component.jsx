// import { ProjectsMain, Box } from "./projects.styles";
import { HeadingSecondary } from "../../../../Typography/heading-secondary/heading-secondary.styles";
import ProjectImg from "../../../../assets/NewsHomePage.jpeg";
import "./projects.styles.scss";

const Projects = () => {
  return (
    <main className="projects-main">
      <div className="pro">
      <HeadingSecondary>My Work</HeadingSecondary>
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
