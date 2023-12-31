import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 800px) {
    height: auto;
    margin-bottom: 4rem;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 14rem;
  margin-left: 3.25rem;

  h2 {
    font-size: 2rem;
  }

  @media only screen and (min-width: 800px) {
    margin-top: 15rem;
  }
`;

export const ProjectsWrapper = styled.div`
  margin: 2.65rem 3.25rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media only screen and (min-width: 800px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Project = styled.div`
  height: 20.5rem;
  width: 100%;
  max-width: 20rem;
  background: #141818;
  border: 1px solid #5f5f5f;
  border-radius: 0.56rem;
  padding: 1rem;

  @media only screen and (min-width: 800px) {
    max-width: 18rem;
  }
`;

export const Framework = styled.div`
  border: 1px solid #5f5f5f;
  width: fit-content;
  padding: 0.4rem;
  border-radius: 0.56rem;
  margin-right: 0.4rem;
`;

export const FrameworkWrapper = styled.div`
  display: flex;
`;

export const Description = styled.div`
  margin: 1.4rem 3rem 0 0;
`;

export const Url = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 100%;

  a {
    display: flex;
  }

  p {
    margin-right: 0.5rem;
  }

  svg {
    margin-top: 0.35rem;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
