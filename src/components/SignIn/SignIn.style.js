import styled from 'styled-components';

export const SignInContainer = styled.div`
  background-color: lightskyblue;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  > h2 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.9rem;
    font-weight: 800;
    text-shadow: 1px 1px 2px gray;
  }

  > form {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 25px;
    box-shadow: 1px 0 3px gray;
  }

  > form > label {
    position: relative;
    margin: 5px;
  }

  > form > label > span {
    font-size: 14px;
    font-style: italic;
  }

  > form > label > input {
    padding: 10px;
    width: 40ch;
    outline: none;
  }

  > form > button {
    /* background-color: hsl(180, 50%, 50%); */
    /* color: white; */
    margin-top: 50px;
    font-weight: 600;
  }

  > form > button + button {
    margin-top: 5px;
  }
`;
