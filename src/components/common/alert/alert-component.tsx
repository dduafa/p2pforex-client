import React from 'react';
import Alert from '@mui/material/Alert';
import { setAlertInfo, setErrors } from '@/features/auth/auth-reducer';
import { useEffect } from 'react';
import { useAppDispatch } from '@/appredux/hooks';
interface Props {
  message: string;
  //   onClose: (e: React.SyntheticEvent) => void;
  severity: 'error' | 'info' | 'success' | 'warning';
}

const AlertComponent = ({ message, severity }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setErrors([]));
      dispatch(setAlertInfo(undefined));
    }, 3000);
  }, [dispatch]);

  return <Alert severity={severity}>{message}</Alert>;
};

export default AlertComponent;
