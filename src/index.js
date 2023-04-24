import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { theme } from './constants';
import { ThemeProvider, CssBaseline } from '@mui/material';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* <Paper> */}
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter basename="/Phonebook/">
              {/* <BrowserRouter basename="/"> */}
                <App />
              </BrowserRouter>
            </PersistGate>
          </Provider>
        {/* </Paper> */}
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
