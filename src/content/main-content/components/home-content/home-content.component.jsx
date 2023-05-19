import styled from "styled-components";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Img from "../../../../assets/Meet_Photographic_Artist_Tim_Tadder_-_LA_Weekly-removebg-preview.png";

import "./home-content.styles.scss";

// --------------- imports ------------- imports --------

const GitHub = styled(GitHubIcon)`
  font-size: 2rem;
  margin-right: 0.8rem;
  cursor: pointer;
  color: #000000;
`;
const Twitter = styled(TwitterIcon)`
  font-size: 2rem;
  margin-right: 0.8rem;
  cursor: pointer;
  color: #000000;
`;
const LinkedIn = styled(LinkedInIcon)`
  font-size: 2rem;
  cursor: pointer;
  color: #000000;
`;

const HomeContent = () => {
  return (
    <main>
      <section className="graphical">
        <p>Front-End</p>
        <p>Software Engineer</p>
        <div className="window">
          <a href="#">&rarr;</a>
        </div>
      </section>
      <section className="textual">
        <div className="about-me">
          <span className="number">001</span>
          <div className="about-me--text">
            <h2>About Me</h2>
            <p>Front-end Software Engineer</p>
            <p>Developing for the Web and Mobile</p>
            <p>In React technologies</p>
          </div>
        </div>
        <div className="media-platforms">
          <a
            href="https://github.com/KeaDevs-art"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <Twitter />
          <a
            href="https://za.linkedin.com/in/kea-devs-2b1019264"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
        <p className="copy-text">
          <span className="copy-sign">&copy;</span> OFF CAMERA by keadevs 2023
        </p>
      </section>
      <img className="avatar" src={Img} alt="Avatar" />
    </main>
  );
};

export default HomeContent;
