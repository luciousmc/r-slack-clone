import styled from 'styled-components';

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const AppLoadingContents = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 20px;
  }
`;

export { AppBody };
