import styled from "styled-components";

export const ExpertiseMain = styled.main`
  ${"" /* background-color: blueviolet; */}
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export const GlassesContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }
`;

export const Glass = styled.div`
  height: 60%;
  width: 30%;
  background: rgba(0, 0, 0, 0.13);
  border-radius: 1.6rem;
  box-shadow: 0 4rem 3rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.49rem);
  -webkit-backdrop-filter: blur(0.49rem);
  border: 0.15rem solid rgba(255, 255, 255, 0.8);
  padding: 1.4rem;

  display: flex;
  flex-direction: column;
  text-align: center;

  .glass-heading {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiSvgIcon-root {
      font-size: 4rem;
    }

    h1 {
      margin: 1.4rem auto;
    }
  }

  p {
    font-size: 1.2em;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;

    &:last-child {
    margin-bottom: 2rem;
  }
  }
`;
