import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const LeftCol = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;

  & p,
  & span {
    font-size: 1em;
    margin: 0;
    opacity: 0.7;
  }

  & span {
    font-size: 4em;
    opacity: 1;
  }
`;

export const Title = styled.div`
  margin-bottom: 2rem;
  text-transform: none;

  & p {
    font-size: 0.9em;
    opacity: 0.4;
    margin-bottom: 0.5rem;
  }

  & span {
    font-size: 2em;
  }
`;

export const RightCol = styled.div`
  width: 60%;
  text-align: right;
`;

export const Form = styled.form`
  & input {
    padding: 1rem;
    border-radius: 2px;
    border: 1px solid #e1e1e1;
    display: block;
    margin: 0 0 1rem;
    width: 100%;
    outline: none;
    font-family: inherit;
  }

  & textarea {
    width: 100%;
    border: 1px solid #e1e1e1;
    font-family: inherit;
    padding: 1rem;
    border-radius: 2px;
    resize: none;
    outline: none;
  }

  & small {
    font-size: 1em;
  }

  & button {
    width: 100%;
    padding: 0.8rem;
    background-color: rgb(153, 253, 2);
    border: none;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
      background: rgb(137, 225, 5);
    }
  }
`;
