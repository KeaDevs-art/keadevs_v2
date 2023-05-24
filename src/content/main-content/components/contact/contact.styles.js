import styled from "styled-components";

export const ContactContainer = styled.footer`
  height: 100%;

  display: grid;
  grid-template-rows: 0.8fr 1.2fr;
`;

export const ContactHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  h2 {
    line-height: 1.5;
    padding: 4rem 8rem;
    text-align: center;
    font-size: 2.8rem;

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
      padding: 4rem 2rem;
    }
  }

  a {
    color: #fefefe;
    background-color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    outline: 1px solid #fefefe;
    display: inline-block;
    border-radius: 10rem;
    padding: 1.3rem 3.4rem;
    position: relative;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    @media only screen and (max-width: 600px) {
      padding: 1.6rem 3rem;
    }
  }
`;
export const ContactBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  h2 {
    font-size: 3rem;
  }
`;

export const MediaPlatforms = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 8rem 0;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }
`;

export const Platform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: currentColor;
    text-decoration: none;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`;
