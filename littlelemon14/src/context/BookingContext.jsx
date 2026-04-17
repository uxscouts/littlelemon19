// src/context/UserContext.jsx
import { createContext, useState, useContext } from 'react';

// 1. Create the Context Object
const BookingContext = createContext();

// 2. Custom hook for consuming the context easily
export const useUser = () => useContext(BookingContext);

// 3. Provider Component
export const BookingProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', date: '' });

  // Function to update user values
  const updateBooking = (name, email, phone, date) => {
    setUser({ name, email, phone, date });
  };

  return (
    // Pass both the state and the updater function
    <BookingContext.Provider value={{ user, updateBooking }}>
      <p>BookingContext.jsx</p>
      {children}
    </BookingContext.Provider>
  );
};