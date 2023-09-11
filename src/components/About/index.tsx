import { Container } from "../../styles";
import Reveal from "../utils/Reveal";
import {
  InfoWrapper,
  ResumeBtn,
  RightWrapper,
  TitleWrapper,
  Wrapper,
} from "./styles";
import Resume from "../../assets/Resume_Daniel_Rodrigues.pdf";

function About() {
  return (
    <>
      <Container className="container">
        <Wrapper className="wrapper">
          <div className="left-wrapper">
            <TitleWrapper className="title-wrapper">
              <Reveal>
                <h2>About Me</h2>
              </Reveal>
            </TitleWrapper>
            <InfoWrapper className="info-wrapper">
              <Reveal>
                <p>Location</p>
              </Reveal>
              <Reveal>
                <p>Lisbon, Portugal</p>
              </Reveal>
              <br />
              <Reveal>
                <p>Hobbies</p>
              </Reveal>
              <Reveal>
                <p>Guitar, Concerts, Photography</p>
              </Reveal>
            </InfoWrapper>
          </div>
          <RightWrapper className="right-wrapper">
            <p>
              <Reveal>
                <span>Hi, I'm Daniel 👋!</span>
              </Reveal>
              <br />
              <br />
              <Reveal>
                <span>
                  I'm a motivated developer passionate about creating web
                  applications. I recently completed a web development course at
                  ETIC - Escola de Tecnologias Inovação e Criação, gaining
                  experience with HTML, CSS, JavaScript and frameworks like
                  React. During the course, I also had the opportunity to
                  explore back-end development using Node.js and MySQL.
                </span>
              </Reveal>
              <br />
              <br />
              <Reveal>
                <span>
                  With a strong taste for collaborating with others, I thrive in
                  team environments - I'm excited to contribute with my skills,
                  and work with experienced professionals to create innovative
                  projects and learn more every day!
                </span>
              </Reveal>
            </p>
            <Reveal>
              <ResumeBtn>
                <a href={Resume} download>
                  Download Resume
                </a>
              </ResumeBtn>
            </Reveal>
          </RightWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default About;
