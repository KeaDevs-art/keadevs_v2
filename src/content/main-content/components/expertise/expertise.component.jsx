import TerminalIcon from '@mui/icons-material/Terminal';
import DevicesIcon from '@mui/icons-material/Devices';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import { HeadingSecondary } from "../../../../Typography/heading-secondary/heading-secondary.styles.js";
import { ExpertiseMain, GlassesContainer, Glass } from "./expertise.styles.js";

const Expertise = () => {
  return (
    <ExpertiseMain>
      <HeadingSecondary>My Expertise</HeadingSecondary>
      <GlassesContainer>
        <Glass>
          <h1>Software Development</h1>
          <p>
            Experienced in both functional and OOP: Python, Java,
            JavaScript, TypeScript.
          </p>
        </Glass>
        <Glass>
          <h1>Frontend React</h1>
          <p>
          Passionate about UI aesthetics. 
          Experienced in React framework development.
          </p>
        </Glass>
        <Glass>
          <h1>React Native Android & iOS</h1>
          <p>
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the React Native framework.
          </p>
        </Glass>
      </GlassesContainer>
    </ExpertiseMain>
  );
};

export default Expertise;
