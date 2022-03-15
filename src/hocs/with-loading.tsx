import React from 'react';
import Loader from '@components/common/loader/loader-svg';
import { authSelector } from '@features/auth/auth-reducer';
import { useAppSelector } from '@appredux/hooks';

const WithLoading = (Component: React.ComponentType) => {
  return function WithLoadingComponent({
    ...props
  }: React.HTMLProps<HTMLInputElement>) {
    const { loading } = useAppSelector(authSelector);

    return loading ? <Loader /> : <Component {...props} />;
  };
};

export default WithLoading;
