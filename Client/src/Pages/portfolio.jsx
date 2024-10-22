import React, { useState } from 'react';
import Header from '../Components/Header';
import StockForm from '../Components/StockForm';
import PortfolioTable from '../Components/PortfolioTable';
import '../Styles/portfolio.css';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState({});

    const updatePortfolio = (newPortfolio) => {
        setPortfolio(newPortfolio);
    };

    return (
        <div className="container">
            
            <Header />
            
            <main>
                <StockForm portfolio={portfolio} updatePortfolio={updatePortfolio} />
                <PortfolioTable portfolio={portfolio} />
            </main>
        </div>
    );
};

export default Portfolio;
