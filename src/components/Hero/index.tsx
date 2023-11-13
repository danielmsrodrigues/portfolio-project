import ReactLogo from "../../assets/react-logo.png";
import TypescriptLogo from "../../assets/typescript-logo.png";
import NodeJsLogo from "../../assets/nodejs-logo.png";
import HtmlLogo from "../../assets/html-logo.png";
import CssLogo from "../../assets/css-logo.png";
import SassLogo from "../../assets/sass-logo.png";
import JavascriptLogo from "../../assets/javascript-logo.png";
import GithubLogo from "../../assets/github-logo.png";
import LinkedinLogo from "../../assets/linkedin-logo.png";
import InstagramLogo from "../../assets/instagram-logo.png";
import { Container } from "../../styles";
import {
  ContactBtn,
  Line,
  MainWrapper,
  Mouse,
  Roll,
  RollShadow,
  SecondaryWrapper,
  Socials,
  SocialsText,
  TechStackWrapper,
  TitleWrapper,
  Wrapper,
} from "./styles";

function Hero() {
  return (
    <>
      <Container className="container">
        <Wrapper className="wrapper">
          <TitleWrapper className="title-wrapper">
            <h1>Daniel Rodrigues</h1>
            <h2>Full-Stack Developer</h2>
          </TitleWrapper>

          <a href="#contact">
            <ContactBtn>Contact Me</ContactBtn>
          </a>

          <TechStackWrapper className="tech-stack-wrapper">
            <h3>Tech Stack</h3>
            <MainWrapper className="main-wrapper">
              <img src={ReactLogo} alt="React" title="React" />
              <img src={TypescriptLogo} alt="Typescript" title="Typescript" />
              <img src={NodeJsLogo} alt="NodeJs" title="NodeJs" />
              <Line />
            </MainWrapper>
            <SecondaryWrapper className="secondary-wrapper">
              <img src={HtmlLogo} alt="Html" title="HTML" />
              <img src={CssLogo} alt="Css" title="CSS" />
              <img src={SassLogo} alt="Sass" title="SASS" />
              <img src={JavascriptLogo} alt="Javascript" title="Javascript" />
            </SecondaryWrapper>
          </TechStackWrapper>
          <Mouse className="mouse-scroll-wrapper">
            <Roll className="roll"></Roll>
            <RollShadow className="roll-shadow"></RollShadow>
          </Mouse>
          <Socials className="socials">
            <a href="https://github.com/danielmsrodrigues" target="_blank">
              <img src={GithubLogo} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-mateus-soares-rodrigues/"
              target="_blank"
            >
              <img src={LinkedinLogo} alt="Linkedin" />
            </a>
            <a
              href="https://www.instagram.com/danieel_rodriguess/"
              target="_blank"
            >
              <img src={InstagramLogo} alt="Instagram" />
            </a>
          </Socials>
          <SocialsText className="socials-text">
            <a href="https://github.com/danielmsrodrigues" target="_blank">
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-mateus-soares-rodrigues/"
              target="_blank"
            >
              <span>Linkedin</span>
            </a>
            <a
              href="https://www.instagram.com/danieel_rodriguess/"
              target="_blank"
            >
              <span>Instagram</span>
            </a>
          </SocialsText>
        </Wrapper>
      </Container>
    </>
  );
}

export default Hero;
