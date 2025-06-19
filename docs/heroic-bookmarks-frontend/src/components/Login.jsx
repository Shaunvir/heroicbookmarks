import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import styles from "./Login.module.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const resp = await axios.post("http://localhost:8080/auth/login", user);
      alert("Login successful");
      console.log(user);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", resp.data.email);
      login();
      navigate("/character");
    } catch (err) {
      alert("Login failed: " + err.response?.data || "Server error");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Login</h1>
        <input
          className={styles.loginInput}
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className={styles.loginInput}
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleLogin} className={styles.loginButton}>
          Login
        </button>

        <section className={styles.signupSection}>
          <h3>
            If you don't have an account? Please{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </h3>
        </section>
      </div>
    </div>
  );
};

export default Login;
