import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.75rem 2.3rem;
  justify-content: space-between;
`;

export const Navigation = styled.ul`
  @media only screen and (min-width: 800px) {
    display: flex;

    a {
      margin-right: 1.75rem;
    }
  }
`;

export const Test = styled.div<{ tested?: boolean }>`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => (props.tested ? "red" : "blue")};
`;

export const Toggle = styled.div`
  & ul {
    display: none;
  }

  &.active ul {
    display: block;
  }

  &.active div {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: 50vw;
    height: 100vh;
    background-color: black;
    animation: slidein 0.3s ease-out;

    @keyframes slidein {
      from {
        right: -100%;
      }
      to {
        right: 0%;
      }
    }

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      text-align: center;
      font-size: 1.5rem;
      justify-content: center;
      letter-spacing: 2px;
    }

    svg {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 800px) {
    & ul {
      display: flex;
    }

    & svg {
      display: none;
    }
  }
`;
