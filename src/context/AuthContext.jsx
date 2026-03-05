import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("movieUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const fakeToken = "fake-jwt-token";

    const userData = { email, token: fakeToken };

    localStorage.setItem("movieUser", JSON.stringify(userData));
    setUser(userData);
  };

  const register = (email, password) => {
    const userData = { email };
    localStorage.setItem("registeredUser", JSON.stringify(userData));
  };

  const logout = () => {
    localStorage.removeItem("movieUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}