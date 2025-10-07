import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";   
import { logoutService } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser({ token, role: decoded.role });
        } else {
          logoutService();
          setUser(null);
        }
      } catch {
        logoutService();
        setUser(null);
      }
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token); // ✅ store token here only
    setUser({ token: data.token, role: data.role });
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
