import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Archik from "./archik.png";


const Nav = props => {
    const{setList,setShowDetails}=props
    const handleDetails=async()=>{
      setShowDetails(true)
       await axios.get("https://dummyjson.com/users")
      .then((response)=>{
        setList(response.data.users)
  
      }).catch((error)=>{
      console.log(error);
      })
    }
  return (
    <div>
      <div className="navBar">
        <div className="logoContainer">
          <img src={Archik} className="logo" />
        </div>
        <div className="itemList">
          <a href="https://archik.in/#about" className="linkone">
            <p className="navIem">About Us</p>
          </a>
          <p className="navIem" onClick={handleDetails}>
            Employee Details
          </p>
          <a href="https://archik.in/#contact" className="link">
            <p className="navIem">Contact Us</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
