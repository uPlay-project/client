import React, { useState, useEffect, createContext, useContext } from 'react';
import authService from '../services/auth.service';

const AuthContext = createContext();

export function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const authenticateUser = async () => {
    const userPayload = await authService.getCurrentUser();
    setIsLoggedIn(true);
    setIsLoading(false);
    setUser(userPayload);
  };

  const logOutUser = () => {
    authService.logOut();
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, setUser, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
