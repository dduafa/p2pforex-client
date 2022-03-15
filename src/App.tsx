import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { store, persistor } from './appredux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorFallbackComponent from '@/components/common/error-fallback/error-fallback-component';
import { Suspense } from 'react';
import Loader from './components/common/loader/loader-svg';
import AppRoutes from './routes/app-routes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
            <Suspense fallback={<Loader />}>
              <AppRoutes />
            </Suspense>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
