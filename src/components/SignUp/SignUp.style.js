import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  > h2 {
    margin-bottom: 15px;
    font-size: 1.9rem;
    font-weight: 800;
  }

  > form {
    display: flex;
    flex-direction: column;
    padding: 25px;
    box-shadow: 1px 0 3px gray;
  }

  > form > label {
    margin: 5px;
  }

  > form > label > input {
    padding: 10px;
    width: 40ch;
    outline: none;
  }

  > form > button {
    background-color: hsl(180, 50%, 50%);
    color: white;
    margin-top: 15px;
    font-weight: 600;
  }
`;
