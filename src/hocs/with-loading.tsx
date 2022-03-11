import React from 'react';
import Loader from '@components/common/loader/loader-svg';

interface Props {
  isLoading: boolean;
}

type LoadingProps = Props & React.HTMLProps<HTMLInputElement>;

const WithLoading = (Component: React.ComponentType) => {
  return function withLoadingComponent({ isLoading, ...props }: LoadingProps) {
    return isLoading ? <Loader /> : <Component {...props} />;
  };
};

export default WithLoading;
