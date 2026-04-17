

{/*}
import { createContext, useState, useContext } from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
<App title="My React App" userCount={10} />
)
*/}

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext'; // Import Provider
import { BookingProvider } from './context/BookingContext'; // Import Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </BookingProvider>
  </React.StrictMode>
);
