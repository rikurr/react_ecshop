import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style';

const WithSpinner = WrappedConponent => {
  const  Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
        <WrappedConponent {...otherProps} />
      )
  }
  return Spinner;
}

export default WithSpinner;
