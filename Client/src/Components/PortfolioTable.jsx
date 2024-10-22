import React from 'react';

const PortfolioTable = ({ portfolio }) => {
    return (
        <section className="portfolio">
            <h2>Your Portfolio</h2>
            <table>
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Quantity</th>
                        <th>Total Invested</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(portfolio).length === 0 ? (
                        <tr>
                            <td colSpan="3">No stocks in portfolio</td>
                        </tr>
                    ) : (
                        Object.entries(portfolio).map(([symbol, data]) => (
                            <tr key={symbol}>
                                <td>{symbol}</td>
                                <td>{data.quantity}</td>
                                <td>{data.totalInvested.toFixed(2)}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default PortfolioTable;
