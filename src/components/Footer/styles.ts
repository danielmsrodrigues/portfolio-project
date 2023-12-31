import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #000;
  margin-top: 5rem;
  width: 100vw;
`;

export const Content = styled.div`
  padding: 1rem;
  height: 5rem;
  font-size: 0.65rem;
  color: #848484;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 800px) {
    padding: 1rem;
    height: 10rem;
    max-width: 1300px;
    margin: 0 auto;
    font-size: 0.9rem;
    color: #848484;
    display: flex;
    justify-content: space-between;
  }
`;

export const List = styled.ul`
  display: flex;

  & li {
    margin-right: 1rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;
