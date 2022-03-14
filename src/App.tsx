import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { store, persistor } from './appredux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ProtectedRoutes from './routes/protected-routes';
import ErrorFallbackComponent from '@/components/common/error-fallback/error-fallback-component';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
            {/* <AppRoutes /> */}
            <ProtectedRoutes />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
