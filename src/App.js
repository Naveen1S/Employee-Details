import React from "react";
import { useState } from "react";
import "./App.css";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";
import Nav from "./EmployeeDetails/Nav";

function App() {
  const [showDetails,setShowDetails]=useState(false)
  const [list,setList]=useState()


  return (
    <div className={!showDetails && "App"}>
      <Nav setList={setList} setShowDetails={setShowDetails}/>
      {!showDetails&&<p className="title">Welcome  to  Archick Technologies</p>}
      {showDetails?<EmployeeDetails list={list} setShowDetails={setShowDetails}/>:null}
    </div>
  );
}

export default App;
