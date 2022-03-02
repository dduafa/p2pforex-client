import { Provider } from 'react-redux';
import { store, persistor } from './appredux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ProtectedRoutes from './routes/protected-routes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ProtectedRoutes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
