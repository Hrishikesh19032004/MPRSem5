import React, { useState } from 'react';
import Chart from '../Chart';
import '../Styles/Stocks.css';
import portfolio from './portfolio'
const stockFiles = [
  { name: 'Adani Power', file: 'adani-power.csv' },
  { name: 'INDIA VIX', file: 'INDIAVIX.csv' },
  { name: 'Infosys', file: 'infosys.csv' },
  { name: 'IRFC', file: 'irfc.csv' },
  { name: 'KIOCL', file: 'kiocl.csv' },
  { name: 'KPIT', file: 'kpit.csv' },
  { name: 'NIFTY 50', file: 'NIFTY 50.csv' },
  { name: 'NIFTY 500', file: 'NIFTY 500.csv' },
  { name: 'Reliance', file: 'Reliance.csv' },
  { name: 'RVNL', file: 'rvnl.csv' },
  { name: 'Suzlon', file: 'suzlon.csv' },
  { name: 'Tata Motors', file: 'tataMotors.csv' },
  { name: 'TCS', file: 'tcs.csv' },
  { name: 'Zomato', file: 'zomato.csv' },
];

const Stocks = () => {
    const [selectedStock, setSelectedStock] = useState(stockFiles[0].file);

    return (
      <>
      <div style={{width:'100%', height:'70%'}}>
         <div className="App">
        <nav className="navbar">
          {stockFiles.map((stock) => (
            <button
              key={stock.file}
              className={`navbar-button ${selectedStock === stock.file ? 'active' : ''}`}
              onClick={() => setSelectedStock(stock.file)}
            >
              {stock.name}
            </button>
          ))}
        </nav>
        <div className="chart-container">
          <h1>{stockFiles.find(stock => stock.file === selectedStock).name}</h1>
          <Chart fileName={selectedStock} />
        </div>
      </div>
      </div>
      
      </>
    );
}

export default Stocks