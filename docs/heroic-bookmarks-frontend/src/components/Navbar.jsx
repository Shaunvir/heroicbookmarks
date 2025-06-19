import React, { useState } from "react";
import styles from "./Navbar.module.css";

import logo from "../assets/images/mainLogo.png";
import profile from "../assets/images/newProfile.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (type) => {
    setIsOpen((prev) => (prev === type ? null : type));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <img
          src={profile}
          alt="Logo"
          className={styles.logo}
          onClick={() => toggle("profile")}
        />
        {isOpen === "profile" && (
          <div className={styles.popup + " " + styles.profilePopup}>
            <ul>
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Settings & Privacy</a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
