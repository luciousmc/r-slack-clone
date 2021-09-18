import styled from 'styled-components';

export const SpinnerContainer = styled.div``;

export const SpinnerCircle = styled.div`
  width: 50px;
  height: 50px;
  background-image: linear-gradient(to right, lightgreen, purple);
  padding: 10px;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerInnerCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
`;
