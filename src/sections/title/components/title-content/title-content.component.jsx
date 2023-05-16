import {
  ContentContainer,
  Exp,
  Summary,
  Animation,
} from "./title-content.styles";
import { AboutParagraph } from "../../../../Typography/about/about-paragraph.styles";
import { Heading } from "../../../../Typography/heading-primary/heading-primary.styles";
import Button from "../../../../components/button/button.component";

const TitleContent = () => {
  return (
    <ContentContainer>
      <Exp />
      <Summary>
        <Heading>Kea Devs</Heading>
        <AboutParagraph>
          Software Engineer, Front End & App Developer.
        </AboutParagraph>
      </Summary>
      <Animation>
        <Button href="#expertise">→</Button>
      </Animation>
    </ContentContainer>
  );
};

export default TitleContent;
