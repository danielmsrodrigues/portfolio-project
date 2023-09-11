import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  overflow: auto;

  img {
    height: 2rem;
    width: auto;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 10rem;
  letter-spacing: -0.84px;
  line-height: 3.5rem;

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.75rem;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    position: relative;
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 2s linear infinite;
  }

  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }
    to {
      -webkit-mask-position: -50%;
    }
  }
`;

export const Line = styled.hr`
  width: 1.95rem;
  margin: 1rem auto 0;
  border: 1px solid white;
`;

export const ContactBtn = styled.button`
  width: 12rem;
  padding: 0.8rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  color: inherit;
  background: linear-gradient(60deg, #d62929e0, #f9cc2ea1);
  font-size: 1rem;
`;

export const TechStackWrapper = styled.div`
  margin-top: 4.8rem;
  opacity: 0.6;

  h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

export const MainWrapper = styled.div`
  margin-top: 0.87rem;

  img {
    height: 1.56rem;
    width: auto;
    margin: 1.12rem;
  }

  img:nth-child(2) {
    margin-right: 1.5rem;
  }
`;
export const SecondaryWrapper = styled.div`
  margin-top: 1.87rem;

  img {
    height: 1rem;
    width: auto;
    margin: 0.56rem;
  }
`;

// ADICIONAR RESPONSIVE
export const Mouse = styled.div`
  display: none;

  /* @media */
  width: 26px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid #fff;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`;

export const Roll = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  margin-left: -2px;
  height: 4px;
  border-radius: 4px;
  background: #fff;
  -webkit-animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite
    alternate;
  animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
  z-index: 2;
`;

export const RollShadow = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  margin-left: -2px;
  height: 4px;
  background: #aaa;
  border-radius: 4px;
  -webkit-animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite
    alternate;
  animation: mouseScroll 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
  animation-delay: 0s;
  -webkit-animation-delay: 80ms;
  animation-delay: 80ms;
  z-index: 1;

  @-webkit-keyframes mouseScroll {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(14px);
      transform: translateY(14px);
    }
  }
  @keyframes mouseScroll {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(14px);
      transform: translateY(14px);
    }
  }
`;

export const Socials = styled.div`
  width: 100%;
  margin: 12rem auto 0;
  display: none;

  img {
    height: 1rem;
    margin: 0.5rem;
    opacity: 0.6;
  }
`;

export const SocialsText = styled.div`
  width: 100%;
  margin: 12rem auto 0;

  span {
    opacity: 0.6;
    font-size: 0.6rem;
    text-transform: uppercase;
    margin-right: 1rem;
  }

  a:last-child span {
    margin-right: 0;
  }
`;
