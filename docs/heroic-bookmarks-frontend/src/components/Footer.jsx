import React, { useState } from "react";

import styles from "./Footer.module.css";
import shop from "../assets/images/shop.png";
import about from "../assets/images/about.png";

const Footer = () => {
  const [isOpenShop, setIsOpenShop] = useState("null");
  const [isOpenAbout, setIsOpenAbout] = useState("null");

  const toggleShop = (type) => {
    setIsOpenShop((prev) => (prev === type ? null : type));
  };

  const toggleAbout = (type) => {
    setIsOpenAbout((prev) => (prev === type ? null : type));
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftIcon}>
        <img src={shop} alt="" onClick={() => toggleShop("shop")} />
        {isOpenShop === "shop" && (
          <div className={styles.popup + " " + styles.shopToggle}>
            <ul>
              <li>
                <a href="">MarketPlace</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={styles.middleSection}>
        <h3>@COPYRIGHT 2025 | ALL RIGHTS RESERVED</h3>
      </div>
      <div className={styles.rightIcon}>
        <img src={about} alt="" onClick={() => toggleAbout("about")} />
        {isOpenAbout === "about" && (
          <div className={styles.popup + " " + styles.aboutToggle}>
            <ul>
              <li>
                <a href="">Collections</a>
              </li>
              <li>
                <a href="">Activities</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
