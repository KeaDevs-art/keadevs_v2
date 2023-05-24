import TerminalIcon from "@mui/icons-material/Terminal";
import DevicesIcon from "@mui/icons-material/Devices";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { HeadingSecondary } from "../../../../Typography/heading-secondary/heading-secondary.styles.js";
import { ExpertiseMain, GlassesContainer, Glass } from "./expertise.styles.js";

const Expertise = () => {
  return (
    <ExpertiseMain>
      <HeadingSecondary>My Expertise</HeadingSecondary>
      <GlassesContainer>
        <Glass>
          <div className="glass-heading">
            <TerminalIcon />
            <h1>Software Development</h1>
          </div>
          <div className="glass-detail">
            <p>
              Experienced in both functional and OOP: Python, Java, JavaScript,
              TypeScript.
            </p>
          </div>
        </Glass>
        <Glass>
          <div className="glass-heading">
            <DevicesIcon />
            <h1>Frontend React</h1>
          </div>
          <div className="glass-detail">
            <p>
              Passionate about UI aesthetics. Experienced in React framework
              development, HTML, CSS, EJS templating, Bootstrap and Git tooling.
            </p>
          </div>
        </Glass>
        <Glass>
          <div className="glass-heading">
            <PhoneIphoneIcon />
            <h1>React Native Android & iOS</h1>
          </div>
          <div className="glass-detail">
            <p>
              Skilled in developing native mobile apps and cross-platform
              solutions using the React Native framework.
            </p>
          </div>
        </Glass>
      </GlassesContainer>
    </ExpertiseMain>
  );
};

export default Expertise;
