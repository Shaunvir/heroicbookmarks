import React from "react";

import styles from "./Header.module.css";
import mainLogo from '../assets/images/mainLogo.png'
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <section>
        <img src={mainLogo} alt="" />
      </section>
      <SearchBar />
    </div>
  );
};

export default Header;
