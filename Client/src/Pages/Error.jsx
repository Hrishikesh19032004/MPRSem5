import React from 'react';
import ErrorImage from "../Images/Error.png";
import "../Styles/Error.css"; 

export const Error = () => {
  return (
    <div className="error-container">
      <img src={ErrorImage} alt="Error" height={"20rem"} width={"50%"} />
    </div>
  );
}
