import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './reset.css';

//Modal 관련
import { ScrollLockProvider } from '@yoojinyoung/usescrolllock';
import ModalProvider from './contexts/modal.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollLockProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ScrollLockProvider>
  </React.StrictMode>
);
