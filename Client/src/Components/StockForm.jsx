import React, { useState } from 'react';

const StockForm = ({ portfolio, updatePortfolio }) => {
    const [stockSymbol, setStockSymbol] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [action, setAction] = useState('buy');
    const [suggestions, setSuggestions] = useState([]);

    const stocksData = {
        "ADANIPORTS": 750,
        "ASIANPAINT": 3101.00,
        "AXISBANK": 669,
        "BAJAJ-AUTO": 3370.00,
        "BAJAJFINSV": 17200.00,
        "BAJFINANCE": 7021.00,
        "BHARTIARTL": 763,
        "BPCL": 397.15,
        "BRITANNIA": 3560.00,
        "CIPLA": 892,
        "COALINDIA": 157.75,
        "DIVISLAB": 4770.00,
        "DRREDDY": 4580.00,
        "EICHERMOT": 2495.00,
        "GRASIM": 1757.30,
        "HCLTECH": 1120.00,
        "HDFC": 2820.35,
        "HDFCBANK": 1500.00,
        "HDFCLIFE": 685,
        "HEROMOTOCO": 2580.00,
        "HINDALCO": 441.8,
        "HINDUNILVR": 2344.00,
        "ICICIBANK": 739,
        "INDUSINDBK": 951,
        "INFY": 1702.55,
        "IOC": 125.6,
        "ITC": 228.9,
        "JSWSTEEL": 668.25,
        "KOTAKBANK": 2002.00,
        "LT": 1820.00,
        "M&M": 885,
        "MARUTI": 7520.00,
        "NESTLEIND": 19148.85,
        "NTPC": 133.2,
        "ONGC": 152.25,
        "POWERGRID": 204.05,
        "RELIANCE": 2467.80,
        "SBILIFE": 1154.00,
        "SBIN": 486.25,
        "SHREECEM": 26450.00,
        "SUNPHARMA": 775,
        "TATACONSUM": 800.2,
        "TATAMOTORS": 486,
        "TATASTEEL": 1157.90,
        "TCS": 3425.00,
        "TECHM": 1544.00,
        "TITAN": 2377.80,
        "ULTRACEMCO": 7550.00,
        "UPL": 726,
        "WIPRO": 632
    };

    const handleStockSymbolChange = (e) => {
        const query = e.target.value.toUpperCase().trim();
        setStockSymbol(query);
        if (query.length > 0) {
            const matches = Object.keys(stocksData).filter(symbol => symbol.startsWith(query));
            setSuggestions(matches);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (symbol) => {
        setStockSymbol(symbol);
        setCurrentPrice(stocksData[symbol]);
        setSuggestions([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPortfolio = { ...portfolio };
        const currentPriceFloat = parseFloat(currentPrice);

        if (!stocksData[stockSymbol]) {
            alert('Invalid stock symbol');
            return;
        }

        if (action === 'buy') {
            if (newPortfolio[stockSymbol]) {
                newPortfolio[stockSymbol].quantity += quantity;
                newPortfolio[stockSymbol].totalInvested += currentPriceFloat * quantity;
            } else {
                newPortfolio[stockSymbol] = {
                    quantity: quantity,
                    totalInvested: currentPriceFloat * quantity
                };
            }
        } else if (action === 'sell') {
            if (newPortfolio[stockSymbol]) {
                if (newPortfolio[stockSymbol].quantity >= quantity) {
                    newPortfolio[stockSymbol].quantity -= quantity;
                    newPortfolio[stockSymbol].totalInvested -= currentPriceFloat * quantity;
                    if (newPortfolio[stockSymbol].quantity === 0) {
                        delete newPortfolio[stockSymbol];
                    }
                } else {
                    alert('You cannot sell more than you hold');
                    return;
                }
            } else {
                alert('You do not own any shares of this stock');
                return;
            }
        }

        updatePortfolio(newPortfolio);
        setStockSymbol('');
        setQuantity(1);
        setAction('buy');
        setCurrentPrice('');
    };

    return (
        <section className="stock-form">
            <h1>Portfolio Management</h1>
            <h4>Buy/Sell Stocks</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="stockSymbol">Stock Symbol:</label>
                <input 
                    type="text" 
                    id="stockSymbol" 
                    value={stockSymbol}
                    onChange={handleStockSymbolChange}
                    required 
                    autoComplete="off" 
                />
                {suggestions.length > 0 && (
                    <div className="suggestions-box">
                        {suggestions.map(symbol => (
                            <div 
                                key={symbol} 
                                onClick={() => handleSuggestionClick(symbol)}
                            >
                                {symbol}
                            </div>
                        ))}
                    </div>
                )}

                <label htmlFor="currentPrice">Current Price:</label>
                <input 
                    type="text" 
                    id="currentPrice" 
                    value={currentPrice}
                    disabled 
                />

                <label htmlFor="quantity">Quantity:</label>
                <input 
                    type="number" 
                    id="quantity" 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1" 
                    required 
                />

                <label htmlFor="action">Action:</label>
                <select 
                    id="action" 
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                >
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                </select>
                
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default StockForm;
