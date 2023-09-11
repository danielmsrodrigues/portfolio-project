import { Container } from "../../styles";
import Reveal from "../utils/Reveal";
import {
  Description,
  Framework,
  FrameworkWrapper,
  Project,
  ProjectsWrapper,
  TitleWrapper,
  Url,
  Wrapper,
} from "./styles";

function Projects() {
  return (
    <>
      <Container className="container">
        <Wrapper className="wrapper">
          <TitleWrapper className="title-wrapper">
            <Reveal>
              <h2>Projects</h2>
            </Reveal>
          </TitleWrapper>
          <ProjectsWrapper className="projects-wrapper">
            <Reveal>
              <Project className="project-1">
                <FrameworkWrapper>
                  <Framework className="framework">
                    <p>ReactJs</p>
                  </Framework>
                  <Framework className="framework">
                    <p>Typescript</p>
                  </Framework>
                </FrameworkWrapper>
                <Description className="description">
                  <p>
                    Moviepedia is a React app that utilises The Movie Database
                    API to provide you with information about movies.
                  </p>
                </Description>
                <Url className="url">
                  <a
                    href="https://github.com/danielmsrodrigues/moviepedia"
                    target="_blank"
                  >
                    <p>Moviepedia</p>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.84018 1.52033L8.35227 1.4954L8.32858 1.05657L7.86644 1.03407L7.84018 1.52033ZM0.291607 7.99955C0.0913592 8.1897 0.0913592 8.49799 0.291607 8.68813C0.491854 8.87828 0.816519 8.87828 1.01677 8.68813L0.291607 7.99955ZM8.61115 6.29022L8.35227 1.4954L7.32809 1.54526L7.58696 6.34008L8.61115 6.29022ZM7.86644 1.03407L2.8169 0.788258L2.76439 1.76078L7.81393 2.00659L7.86644 1.03407ZM7.4776 1.17604L0.291607 7.99955L1.01677 8.68813L8.20276 1.86462L7.4776 1.17604Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </Url>
              </Project>
            </Reveal>
            <Reveal>
              <Project className="project-2">
                <FrameworkWrapper className="framework-wrapper">
                  <Framework className="framework">
                    <p>ReactJs</p>
                  </Framework>
                  <Framework className="framework">
                    <p>NodeJs</p>
                  </Framework>
                </FrameworkWrapper>
                <Description className="description">
                  <p>
                    All-inclusive restaurant application, divided into four
                    projects: restaurant website; admin dashboard; table order
                    management; kitchen interface for order processing.
                  </p>
                </Description>
                <Url className="url">
                  <a
                    href="https://github.com/danielmsrodrigues/burguerlicious-full"
                    target="_blank"
                  >
                    <p>Burgerlicious</p>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.84018 1.52033L8.35227 1.4954L8.32858 1.05657L7.86644 1.03407L7.84018 1.52033ZM0.291607 7.99955C0.0913592 8.1897 0.0913592 8.49799 0.291607 8.68813C0.491854 8.87828 0.816519 8.87828 1.01677 8.68813L0.291607 7.99955ZM8.61115 6.29022L8.35227 1.4954L7.32809 1.54526L7.58696 6.34008L8.61115 6.29022ZM7.86644 1.03407L2.8169 0.788258L2.76439 1.76078L7.81393 2.00659L7.86644 1.03407ZM7.4776 1.17604L0.291607 7.99955L1.01677 8.68813L8.20276 1.86462L7.4776 1.17604Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </Url>
              </Project>
            </Reveal>
            <Reveal>
              <Project className="project-3">
                <FrameworkWrapper className="framework-wrapper">
                  <Framework className="framework">
                    <p>Typescript</p>
                  </Framework>
                  <Framework className="framework">
                    <p>Angular</p>
                  </Framework>
                </FrameworkWrapper>
                <Description className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, at reiciendis? A laudantium fuga libero et nulla sint
                    maiores laborum!
                  </p>
                </Description>
                <Url className="url">
                  <a href="#">
                    <p>Project 3</p>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.84018 1.52033L8.35227 1.4954L8.32858 1.05657L7.86644 1.03407L7.84018 1.52033ZM0.291607 7.99955C0.0913592 8.1897 0.0913592 8.49799 0.291607 8.68813C0.491854 8.87828 0.816519 8.87828 1.01677 8.68813L0.291607 7.99955ZM8.61115 6.29022L8.35227 1.4954L7.32809 1.54526L7.58696 6.34008L8.61115 6.29022ZM7.86644 1.03407L2.8169 0.788258L2.76439 1.76078L7.81393 2.00659L7.86644 1.03407ZM7.4776 1.17604L0.291607 7.99955L1.01677 8.68813L8.20276 1.86462L7.4776 1.17604Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </Url>
              </Project>
            </Reveal>
            <Reveal>
              <Project className="project-4">
                <FrameworkWrapper className="framework-wrapper">
                  <Framework className="framework">
                    <p>Javascript</p>
                  </Framework>
                </FrameworkWrapper>
                <Description className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, at reiciendis? A laudantium fuga libero et nulla sint
                    maiores laborum!
                  </p>
                </Description>
                <Url className="url">
                  <a href="#">
                    <p>Project 4</p>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.84018 1.52033L8.35227 1.4954L8.32858 1.05657L7.86644 1.03407L7.84018 1.52033ZM0.291607 7.99955C0.0913592 8.1897 0.0913592 8.49799 0.291607 8.68813C0.491854 8.87828 0.816519 8.87828 1.01677 8.68813L0.291607 7.99955ZM8.61115 6.29022L8.35227 1.4954L7.32809 1.54526L7.58696 6.34008L8.61115 6.29022ZM7.86644 1.03407L2.8169 0.788258L2.76439 1.76078L7.81393 2.00659L7.86644 1.03407ZM7.4776 1.17604L0.291607 7.99955L1.01677 8.68813L8.20276 1.86462L7.4776 1.17604Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </Url>
              </Project>
            </Reveal>
          </ProjectsWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default Projects;
