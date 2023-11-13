import styled from "styled-components";

export const Blob = styled.div`
  @media only screen and (max-width: 799px) {
    display: none;
  }

  background-color: white;
  height: 150px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(
    276deg,
    rgba(255, 196, 16, 1) 0%,
    rgba(211, 78, 36, 1) 48%
  );
  animation: rotate 20s infinite;
  filter: blur(40px);
  z-index: -2;

  @keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.5;
    }

    to {
      rotate: 360deg;
    }
  }
`;

export const Blur = styled.div`
  @media only screen and (max-width: 799px) {
    display: none;
  }

  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  backdrop-filter: blur(40px);
`;
