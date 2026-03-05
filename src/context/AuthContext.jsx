import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const USER_KEY = "movieUser";
const CSRF_KEY = "csrfToken";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user safely
  useEffect(() => {
    try {
      const storedUser = sessionStorage.getItem(USER_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error loading user session", error);
      sessionStorage.removeItem(USER_KEY);
    }
  }, []);

  // Generate CSRF token
  const generateCSRFToken = () => {
    const token = crypto.randomUUID();
    sessionStorage.setItem(CSRF_KEY, token);
    return token;
  };

  const login = (email, password) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const fakeToken = crypto.randomUUID();
    const csrfToken = generateCSRFToken();

    const userData = {
      email,
      token: fakeToken,
      csrfToken,
    };

    sessionStorage.setItem(USER_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const register = (email, password) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const userData = { email };

    // simulate secure registration storage
    sessionStorage.setItem("registeredUser", JSON.stringify(userData));
  };

  const logout = () => {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(CSRF_KEY);
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