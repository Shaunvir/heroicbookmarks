import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";  
import axios from "axios";  

import styles from "./SearchBar.module.css";  
import search from "../assets/images/search.svg";  

const SearchBar = () => {  
  const [code, setCode] = useState("");  
  const navigate = useNavigate();  

  const handleSearch = async () => {  
    try {  
      const response = await axios.get(`http://localhost:8080/characters/${code}`);  
      navigate(`/character/${code}`, { state: { character: response.data } });  
    } catch (error) {  
      navigate("/notfound");  
    }  
  };  

  return (  
    <div className={styles.searchContainer}>  
      <div className={styles.inputSection}>  
        <input  
          type="text"  
          value={code}  
          className={styles.searchInput}  
          onChange={(e) => setCode(e.target.value)}  
          placeholder="Enter the code"  
        />  
        <button  
          type="button"  
          className={styles.searchButton}  
          onClick={handleSearch}  
        >  
          <img src={search} alt="search" />  
        </button>  
      </div>  
    </div>  
  );  
};  

export default SearchBar;  