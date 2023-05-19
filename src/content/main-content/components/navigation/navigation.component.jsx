import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  Resume,
  NavLinks,
  NavLink,
} from "./navigation.styles.js";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Resume href="/Resume.docx" download>
          Download CV
        </Resume>
        <NavLinks>
          <NavLink to="/">home</NavLink>
          <NavLink to="/expertise">expertise</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
