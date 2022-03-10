import React from 'react';
import Loader from '@components/common/loader/loader-svg';

interface Props {
  isLoading: boolean;
}

const WithLoading = (Component: React.ComponentType) => {
  return function withLoadingComponent({
    isLoading,
    ...props
  }: Props & React.HTMLProps<HTMLInputElement>) {
    if (isLoading) {
      return <Loader />;
    }
    return <Component {...props} />;
  };
};

export default WithLoading;
