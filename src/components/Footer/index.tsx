import { Content, List, Wrapper } from "./styles";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper id="footer">
      <Content>
        <p>© {currentYear} All rights reserved.</p>
        <List>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="https://github.com/danielmsrodrigues" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-mateus-soares-rodrigues/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/danieel_rodriguess/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </List>
      </Content>
    </Wrapper>
  );
}

export default Footer;
