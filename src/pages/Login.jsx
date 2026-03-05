import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Basic sanitization to reduce XSS risks
const sanitizeInput = (value) => {
  return value.replace(/[<>]/g, "");
};

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanEmail = sanitizeInput(email.trim());
    const cleanPassword = sanitizeInput(password.trim());

    if (!validateEmail(cleanEmail)) {
      setError("Please enter a valid email.");
      return;
    }

    if (cleanPassword.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    try {
      login(cleanEmail, cleanPassword);
      navigate("/");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(sanitizeInput(e.target.value))}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(sanitizeInput(e.target.value))}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;