import React from 'react';
import {
  SpinnerCircle,
  SpinnerContainer,
  SpinnerInnerCircle,
} from './Spinner.style';

function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerCircle>
        <SpinnerInnerCircle />
      </SpinnerCircle>
    </SpinnerContainer>
  );
}

export { Spinner };
