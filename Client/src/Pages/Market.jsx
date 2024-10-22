import React from "react";

import Stocks from "./Stocks";
export const Market = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px', 
          paddingTop:'3rem',
          margin: 0,
          marginBottom:'3rem' 
        }}
      >
        <h1 style={{ fontWeight: '100', textAlign: 'center',}}>Market</h1>
      </div>

      
      <Stocks/>
    </>
  );
};
