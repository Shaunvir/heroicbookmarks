import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

import bgGif from "../assets/images/home-background.gif";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div
        className={styles.backGf}
        style={{ backgroundImage: `url(${bgGif})` }}
      />
      <div className={styles.overlayLayer} />
      <div className={styles.contentLayer}>
        <Navbar />
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
