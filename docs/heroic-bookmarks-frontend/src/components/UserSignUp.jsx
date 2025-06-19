import React, { useState } from "react";

const UserSignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = async () => {
    const res = await axios.post("auth/signup", user);
    localStorage.setItem("token", res.data.token);
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button type="submit" onClick={handleChange}>signup</button>
    </div>
  );
};

export default UserSignUp;
