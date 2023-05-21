import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  Menu,
  NavigationContainer,
  Resume,
  NavLinks,
  NavLink,
  DarkMode,
} from "./navigation.styles.js";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Menu />
        <Resume href="/Resume.docx" download>
          Download CV
        </Resume>
        <NavLinks>
          <NavLink to="/">home</NavLink>
          <NavLink to="/expertise">expertise</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </NavLinks>
        <DarkMode />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
