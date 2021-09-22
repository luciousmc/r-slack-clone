import { Button } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    margin-bottom: 40px;
    height: 100px;
  }
`;

export const SignInButton = styled(Button)`
  margin-top: 50px !important;
  text-transform: inherit !important;
  display: block !important;
  color: white !important;
  width: 70% !important;
  margin: 5px auto !important;
  background-color: gray !important;

  ${(props) => {
    if (props.google) {
      return css`
        background-color: #0a8d48 !important;
      `;
    } else if (props.email) {
      return css`
        background-color: goldenrod !important;
      `;
    } else if (props.facebook) {
      return css`
        background-color: blue !important;
      `;
    }
  }}
`;
