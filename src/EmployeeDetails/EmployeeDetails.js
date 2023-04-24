import React, { useState } from "react";
import Employee from "../EmployeeDetails/Employee.css"

const EmployeeDetails = (props) => {
  const { list ,setShowDetails} = props;
  const [loadMore,setLoadMore]=useState(12)

  
  const handleMore=()=>{
    setLoadMore(loadMore+3)
  }
  const handleBack=()=>{
    setShowDetails(false)
  }
  const finalEmployeeList = list !== undefined && list.slice(0,loadMore).map((data) => {
    return(
      <div className="itemContainer">
        <p className="text">Name: {`${data.firstName} ${data.lastName}`}</p>
        <p className="text">Email: {data.email}</p>
        <p className="text">Department: {data.company.department}</p>
      </div>
    )
  
  });
  return <>
  <div className="container">
    <div className="mainConatiner">{finalEmployeeList}</div>;
    </div>
    {setShowDetails && list === undefined &&<p className="loadText">
      Loading...
      </p>}
  {list&&<div className="buttonContainer">
  <button onClick={handleMore} className="button">Load More</button>
  <button onClick={handleBack} className="button">Back</button>
  </div>}

  </>
};

export default EmployeeDetails;
