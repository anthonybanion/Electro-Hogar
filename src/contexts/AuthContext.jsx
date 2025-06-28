import { createContext, useContext, useEffect, useState } from "react";
import {
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle,
  logout,
  subscribeToAuthChanges,
} from "../auth/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true);

  // Verificar si el usuario es el admin
  const isAdmin = user?.email === "admin@gmail.com";

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        localStorage.setItem("user", JSON.stringify(firebaseUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const register = async (email, password) => {
    const user = await registerWithEmail(email, password);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const login = async (email, password) => {
    const user = await loginWithEmail(email, password);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const loginGoogleAccount = async () => {
    const user = await loginWithGoogle();
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutUser = async () => {
    await logout();
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin,
        register,
        login,
        loginGoogleAccount,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);