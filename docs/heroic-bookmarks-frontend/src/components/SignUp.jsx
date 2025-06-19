import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";

const SignUp = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSignUp = async () => {
    try {
      await axios.post("http://localhost:8080/auth/signup", user);
      alert("Successfully Registered");
      login();
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + err.response?.data || "Server error");
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpForm}>
        <h1 className={styles.signUpTitle}>Sign Up</h1>
        <input
          className={styles.signUpInput}
          type="text"
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          className={styles.signUpInput}
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className={styles.signUpInput}
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className={styles.signUpButton} onClick={handleSignUp}>
          Sign Up
        </button>

        <section className={styles.loginSection}>
          <h3>
            If you already have an account,{" "}
            <span onClick={() => navigate("/login")}>Log In</span> here
          </h3>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
