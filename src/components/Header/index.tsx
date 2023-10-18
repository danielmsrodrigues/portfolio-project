import styled from "styled-components";
import { Container } from "../../styles";
import { Wrapper } from "./styles";
import { useState } from "react";

const Switch = styled.div`
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

  /* @media only screen and (min-width: 800px) {
    & ul {
      display: block;
    }

    & svg {
      display: none;
    }
  } */
`;

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleNavigation = () => {
    setIsActive(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 799 && window.innerWidth < 800) {
  //       setIsActive(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener on unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <Container className="container">
        <Wrapper
          className="wrapper"
          style={{
            backgroundColor: isScrolled ? "#0c0c0c" : "",
            transition: "all .2s linear",
          }}
        >
          <div className="logo">
            <a href="#">DR</a>
          </div>
          <Switch className={isActive ? "active" : ""}>
            <div>
              <ul onClick={handleNavigation}>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              {isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                  onClick={handleMenu}
                  fill="white"
                >
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
              )}
            </div>
            {!isActive && (
              <svg
                width="36"
                height="8"
                viewBox="0 0 36 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleMenu}
              >
                <line y1="1" x2="36" y2="1" stroke="white" strokeWidth="2" />
                <line y1="7" x2="36" y2="7" stroke="white" strokeWidth="2" />
              </svg>
            )}
          </Switch>
        </Wrapper>
      </Container>
    </>
  );
}

export default Header;
