import styled from "styled-components";

export const ButtonRegular = styled.a`
  color: #fefefe;
  text-decoration: none;
  outline: 1px solid #fefefe;
  display: inline-block;
  border-radius: 10rem;
  padding: 1.3rem 3.5rem;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(183, 133, 123, 0.9333333333);
  }
`;

export const GetStarted = styled.a`
  color: #fefefe;
  text-decoration: none;
  outline: 1px solid #fefefe;
  display: inline-block;
  border-radius: 10rem;
  padding: 1.3rem 3.5rem;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(183, 133, 123, 0.9333333333);
  }
  &:hover::before {
    content: "Get Started →";
    color: #161616;
    background-color: #fefefe;
    padding: 1rem 2.5rem;
    position: absolute;
    top: -4.5rem;
    right: -10rem;
  }
`;
