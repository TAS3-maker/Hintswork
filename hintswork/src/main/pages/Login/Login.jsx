import { useState } from "react";
import { loginService } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import { validateEmail, validatePassword } from "../../utils/validators";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const login  = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    if (emailError || passwordError) {
      setError({ email: emailError, password: passwordError });
      return;
    }

    try {
      const data = await loginService(form.email, form.password);
      login(data);

      if (data.role === "admin") navigate("/admin");
      else if (data.role === "superadmin") navigate("/superadmin/dashboard");
      else navigate("/dashboard");

    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
