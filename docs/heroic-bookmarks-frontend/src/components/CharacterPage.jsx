import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./CharacterPage.module.css";
import dot from "../assets/images/knowMoreDot.gif";
import grabButton from "../assets/images/grabNowButton.svg";

function CharacterPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [close, setClose] = useState(false);
  const [hoveredDot, setHoveredDot] = useState(null);
  const [displayedInfo, setDisplayedInfo] = useState("");

  const characterInfo = `Naame: Serra, The Sun Queen
Race: Lioness
Role: Ruler of the Sun Empire
Special Power: Solar Flare
Description: Serra commands the power of the sun, shielding her allies and scorching her enemies.\n\nNOTE: Click on the glowing dots for hidden details`;

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleGrabNow = async () => {
    if (!isLoggedIn) {
      navigate("/login", { state: { from: `/character/${code}` } });
      return;
    }

    try {
      await axios.post("http://localhost:8080/collections/save", {
        email: localStorage.getItem("userEmail"),
        code: "CHAR001",
      });
      alert("Character saved to your collection!");
    } catch (err) {
      alert("Error saving character: " + err.response?.data || err.message);
    }
  };

  useEffect(() => {
    let currentIndex = 0;

    const typeNext = () => {
      if (currentIndex < characterInfo.length) {
        setDisplayedInfo((prev) => prev + characterInfo.charAt(currentIndex));
        currentIndex++;
        setTimeout(typeNext, 50);
      }
    };

    typeNext();

    return () => clearTimeout(typeNext);
  }, []);

  useEffect(() => {
    if (close) return;
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, [close]);

  const handleContinue = () => navigate("/signup");
  const handleClose = () => {
    setShowPopup(false);
    setClose(true);
  };

  const handleDetailsOpen = (dotId) => setHoveredDot(dotId);
  const handleDetailsClose = () => setHoveredDot(null);

  return (
    <div className={styles.characterPage}>
      <div className={styles.characterContainer}>
        <div className={styles.topRightSections}>
          {isLoggedIn ? (
            <>
              <button onClick={() => navigate("/profile")}>👤</button>
              <button onClick={() => navigate("/collection")}>📚</button>
              <button onClick={() => navigate("/activity")}>🕘</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signup")}>Signup</button>
            </>
          )}
        </div>

        <div className={styles.dotContainer}>
          {["one", "two", "three"].map((dotId, i) => (
            <div
              key={dotId}
              className={
                styles[`dot${dotId.charAt(0).toUpperCase() + dotId.slice(1)}`]
              }
              onMouseEnter={() => handleDetailsOpen(dotId)}
              onMouseLeave={handleDetailsClose}
            >
              <img src={dot} alt="" />
              {hoveredDot === dotId && (
                <div
                  className={
                    styles[
                      `dotDetail${
                        dotId.charAt(0).toUpperCase() + dotId.slice(1)
                      }`
                    ]
                  }
                >
                  <p>
                    {dotId === "one" && (
                      <>
                        <span>Jupiter's moons</span> became bases to many{" "}
                        <span>species</span> during the{" "}
                        <span>Climate Wars</span>, especially as Earth became
                        inhospitable. The moons had previously been used as
                        resorts and destinations for{" "}
                        <span>Earth's ultra-wealthy</span>... the gas giant was
                        a staple of <span>vacation</span> pictures from the
                        upper class.
                      </>
                    )}
                    {dotId === "two" && (
                      <>
                        <span>The Glow Lance</span> is the favored weapon of the
                        Feline <span>Ultimatus--Queen</span> Sierra's has been
                        upgraded for range, since she has near-perfect aim from
                        long distances. There are few <span>creatures</span> in
                        the galaxy that can survive a blast of unstoppable light
                        energy from her <span>Lance</span>
                      </>
                    )}
                    {dotId === "three" && (
                      <>
                        <span>Sierra</span> does not live in a home, instead she
                        has a <span>habitat</span>. She spends most of her days
                        lounging in <span>lush marshland</span>, as do most of
                        her people.The <span>villa</span> located on her land is
                        used exclusively for receiving <span>diplomats</span>,
                        or or other royal duties.
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.mainInfo}>
          {displayedInfo.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        {showPopup && (
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={handleClose}>
              close
            </button>
            <h3>Want to save this character?</h3>
            <p>Please sign in to store it in your collection.</p>
            <button onClick={handleContinue}>Continue</button>
          </div>
        )}

        <div className={styles.bottomRight} onClick={() => handleGrabNow()}>
          <img src={grabButton} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
