import React from 'react';
import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';

function App() {
  const something = useAppSelector(authSelector);

  console.log({ something });
  return <div>Hello</div>;
}

export default App;
