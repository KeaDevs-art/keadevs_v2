import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from '@mui/icons-material/Email';

import {
  ContactContainer,
  ContactHeading,
  ContactBody,
  MediaPlatforms,
  Platform,
} from "./contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeading>
        <h2>Let's enrich lives through the application of technology</h2>
        <a href="mailto:iamkeadevs@gmail.com" className="btn">
          Get in touch &nbsp; →
        </a>
      </ContactHeading>
      <ContactBody>
        <MediaPlatforms>
          <Platform>
            <a
              href="https://github.com/KeaDevs-art"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ fontSize: 80 }} />
              <h2>Github</h2>
            </a>
          </Platform>
          <Platform>
            <a
              href="https://za.linkedin.com/in/kea-devs-2b1019264"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: 80 }} />
              <h2>LinkedIn</h2>
            </a>
          </Platform>
          <Platform>
            <a
              href="https://twitter.com/keadevs"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon sx={{ fontSize: 80 }} />
              <h2>Twitter</h2>
            </a>
          </Platform>
        </MediaPlatforms>
      </ContactBody>
    </ContactContainer>
  );
};

export default Contact;
