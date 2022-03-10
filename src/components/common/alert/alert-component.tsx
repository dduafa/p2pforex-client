import Alert from '@mui/material/Alert';
import { setErrors } from '@/features/auth/auth-reducer';
import { useEffect } from 'react';
import { useAppDispatch } from '@/appredux/hooks';

import React from 'react';

interface Props {
  message: string;
  //   onClose: (e: React.SyntheticEvent) => void;
  severity: 'error' | 'info' | 'success' | 'warning';
}

const AlertComponent = ({ message, severity }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(setErrors([])), 3000);
  }, [dispatch]);

  return <Alert severity={severity}>{message}</Alert>;
};

export default AlertComponent;
