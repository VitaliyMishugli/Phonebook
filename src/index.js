import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { theme } from './constants';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <BrowserRouter basename="/Phonebook/"> */}
          <BrowserRouter basename="/">
              <App />
            </BrowserRouter>           
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
