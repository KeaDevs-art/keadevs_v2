import { ExpertiseMain, GlassesContainer, Glass } from "./expertise.styles.js";

const Expertise = () => {
  return (
    <ExpertiseMain>
      <GlassesContainer>
        <Glass>
          <h1>Software Development</h1>
        <p>
          Experienced in both functional and OOP: Dart, Python, Java,
          JavaScript, TypeScript.
        </p>
        </Glass>
        <Glass>
          <h1>Frontend Dev React, NextJS</h1>
        <p>
          Passionate about UI/UX. Over 4 years of development experience in
          HTML, CSS, JS, React and NextJS frameworks.
        </p>
        </Glass>
        <Glass>
          <h1>Flutter Dev Android, iOS</h1>
        <p>
          Skilled in developing hybrid mobile apps and cross-platform solutions
          using the Flutter framework.
        </p>
        </Glass>
      </GlassesContainer>
    </ExpertiseMain>
  );
};

export default Expertise;
