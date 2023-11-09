import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  @media only screen and (min-width: 800px) {
    height: auto;
  }
`;

export const TitleWrapper = styled.div`
  margin: 7rem 0 0 3.25rem;

  h2 {
    font-size: 2rem;
  }
`;

export const InfoWrapper = styled.div`
  margin: 2rem 3.25rem 0;

  p {
    opacity: 0.6;
    font-size: 0.75rem;
  }
`;

export const RightWrapper = styled.div`
  margin: 3.75rem 3.25rem;

  span {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
`;

export const ResumeBtn = styled.button`
  width: 12rem;
  padding: 0.8rem;
  margin-top: 4rem;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid #d62929e0;
  color: inherit;
  background: none;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(60deg, #d62929e0, #f9cc2ea1);
    cursor: pointer;
  }
`;
