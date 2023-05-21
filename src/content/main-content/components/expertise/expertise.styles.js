import styled from "styled-components";

export const ExpertiseMain = styled.main`
  ${'' /* background-color: blueviolet; */}
  height: 100%;
  display: flex;
`;

export const GlassesContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Glass = styled.div`
  height: 60%;
  width: 30%;
  background: rgba(0, 0, 0, 0.13);
  border-radius: 1.6rem;
  box-shadow: 0 4rem 3rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.49rem);
  -webkit-backdrop-filter: blur(0.49rem);
  border: 0.15rem solid rgba(255, 255, 255, 0.1);
`;
