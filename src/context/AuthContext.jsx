import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  console.log(email,role)
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, role, setRole, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};
