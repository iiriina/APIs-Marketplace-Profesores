// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Realiza la lógica de autenticación aquí y establece el usuario si la autenticación es exitosa.
    // Por ejemplo, setUser(userData) después de una autenticación exitosa.
    setUser(UserData);
  };

  const logout = () => {
    // Realiza la lógica de cierre de sesión aquí y establece el usuario en null.
    // Por ejemplo, setUser(null) después de cerrar sesión.
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
