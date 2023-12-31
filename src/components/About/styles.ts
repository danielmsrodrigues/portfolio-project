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
  font-family: inherit;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.5em 0.8em 1.2em;
  margin-top: 2rem;
  color: white;
  background: #d34e24;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: #c93c17;
  }
`;
