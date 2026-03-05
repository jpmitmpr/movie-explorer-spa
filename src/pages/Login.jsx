import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Basic sanitization to prevent XSS
  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, "").trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanEmail = sanitizeInput(email);
    const cleanPassword = sanitizeInput(password);

    if (!cleanEmail || !cleanPassword) {
      setError("Email and password are required");
      return;
    }

    try {
      // simulate CSRF protection token
      const csrfToken = crypto.randomUUID();

      sessionStorage.setItem("csrf_token", csrfToken);

      login(cleanEmail, cleanPassword);

      navigate("/");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;