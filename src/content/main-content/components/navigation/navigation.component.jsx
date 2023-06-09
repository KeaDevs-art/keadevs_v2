import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { NavigationContext } from "../../../../contexts/navigation.context.jsx";
import MobileNavigation from "./mobile-navigation.jsx";
import { ThemeMode } from "../../../../components/theme-mode/theme-mode.component.jsx";

import {
  Menu,
  NavigationContainer,
  Resume,
  NavLinks,
  NavLink,
  DarkMode,
} from "./navigation.styles.js";

// --------------------- imports ---------------- imports --

const Navigation = () => {
  const { isNavActive, handleMenu } = useContext(NavigationContext);

  return (
    <Fragment>
      <NavigationContainer>
        <Menu fontSize="medium" onClick={handleMenu} />
        <Resume href="/Resume_kea.pdf" download>
          Download CV
        </Resume>
        <NavLinks>
          <NavLink to="/">home</NavLink>
          <NavLink to="/expertise">expertise</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </NavLinks>
        <ThemeMode fontSize="medium" />
      </NavigationContainer>
      {isNavActive ? (
        <MobileNavigation>
          <Outlet />
        </MobileNavigation>
      ) : (
        <Outlet />
      )}
    </Fragment>
  );
};

export default Navigation;
