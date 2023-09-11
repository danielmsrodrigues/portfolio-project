import { Container } from "../../styles";
import { Navigation, Wrapper } from "./styles";

function Header() {
  return (
    <>
      <Container className="container">
        <Wrapper className="wrapper">
          <div className="logo">
            <a href="#">DR</a>
          </div>
          <nav>
            <Navigation>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </Navigation>
            <svg
              width="36"
              height="8"
              viewBox="0 0 36 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="36" y2="1" stroke="white" stroke-width="2" />
              <line y1="7" x2="36" y2="7" stroke="white" stroke-width="2" />
            </svg>
          </nav>
        </Wrapper>
      </Container>
    </>
  );
}

export default Header;
