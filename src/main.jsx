import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TechProvider } from './Providers/TechContext';
import { UserProvider } from './Providers/UserContext';
import { GlobalStyles } from './style/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TechProvider>
        <UserProvider>
          <GlobalStyles />
          <App />
        </UserProvider>
      </TechProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
