import styled from "styled-components";

export const NavigationBar = styled.nav`
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Brand = styled.h1`
  font-family: monospace;
  font-size: 2rem;h
  ${"" /* color: #5fcbde; */}
`;

export const NavigationMenuAvatar = styled.img`
  width: 4vh;
  height: 4vh;
  border: 1px solid #5fcbde;
  border-radius: 50%;
  cursor: pointer;
`;

export const Menu = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #5fcbde;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
