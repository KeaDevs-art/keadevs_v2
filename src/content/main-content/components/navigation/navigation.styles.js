import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const Menu = styled(MenuIcon)`

`;

export const DarkMode = styled(DarkModeIcon)``;

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${'' /* background-color: green; */}
  @media only screen and (max-width: 600px) {
    padding-top: 1rem;
  }
`;

export const Resume = styled.a`
  color: rgba(250, 250, 250, 0.81);
  background-color: rgba(0, 0, 0, 1);
  padding: 0.7rem;
  border-radius: 0.4rem;
  cursor: pointer;
  text-decoration: none;
`;

export const NavLinks = styled.nav`
  display: flex;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 4rem;
  }

  position: relative;

  &::after {
    content: "";
    height: .2rem;
    width: 0;
    background-color: currentColor;
    position: absolute;
    left: 0;
    bottom: -0.8rem;
    transition: 0.2s;
  }

  &:hover::after {
    width: 100%;
  }
`;
