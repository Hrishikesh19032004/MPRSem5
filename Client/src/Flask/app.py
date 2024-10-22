from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from fuzzywuzzy import process
import yfinance as yf
from datetime import datetime, timedelta
from response_1 import responses  
import warnings

warnings.filterwarnings("ignore", category=FutureWarning)


equity_data = pd.read_csv('EQUITY_L.csv')

# CORS setup
app = Flask(__name__)
CORS(app)

def get_yahoo_equivalent(stock_name):
    matched_row = process.extractOne(stock_name, equity_data['NAME OF COMPANY'])
    if matched_row:
        matched_name = matched_row[0]
        stock_row = equity_data[equity_data['NAME OF COMPANY'] == matched_name]
        return stock_row['YahooEquiv'].values[0]
    return None

def preprocess_input(user_input):
    word_tokens = word_tokenize(user_input.lower())
    stop_words = set(stopwords.words('english'))
    keywords = [word for word in word_tokens if word.isalnum() and word not in stop_words]
    return keywords

def get_response(user_input):
    user_input = user_input.lower()
    matched_keyword, score = process.extractOne(user_input, responses.keys())
    if score >= 70:
        return responses[matched_keyword][0]
    return "I'm sorry, I don't have an answer for that question."

def fetch_stock_data(symbol):
    try:
        data = yf.download(symbol, start='2021-01-01', end=datetime.today().strftime('%Y-%m-%d'))
        if data.empty:
            return None
        else:
            return data
    except Exception as e:
        print(f"An error occurred while fetching data for {symbol}: {str(e)}")
        return None

def analyze_stock_trend(data):
    data_last_3_months = data.loc[data.index >= (datetime.now() - timedelta(days=90))]
    first_price = data_last_3_months['Close'].iloc[0]
    last_price = data_last_3_months['Close'].iloc[-1]

    trend = 'uptrend' if last_price > first_price else 'downtrend'

    recent_prices = data_last_3_months['Close'][-30:]
    support = recent_prices.min()
    resistance = recent_prices.max()

    return trend, support, resistance

@app.route('/api', methods=['POST'])
def api():
    data = request.json
    user_input = data.get('message')

    if "data" in user_input.lower():
        stock_name = user_input.split("data")[-1].strip()  # Extract stock name from input
        yahoo_equivalent = get_yahoo_equivalent(stock_name)

        if yahoo_equivalent:
            stock_data = fetch_stock_data(yahoo_equivalent)
            if stock_data is not None:
                last_close = stock_data['Close'].iloc[-1]
                trend, support, resistance = analyze_stock_trend(stock_data)
                return jsonify({
                    'response': (f"The last closing price of {stock_name} ({yahoo_equivalent}) is ₹{last_close:.2f}. "
                                 f"The stock is in a {trend} with a support level of ₹{support:.2f} and resistance at ₹{resistance:.2f}.")
                })
            else:
                return jsonify({'response': f"I'm sorry, I couldn't fetch data for {stock_name}."})
        else:
            return jsonify({'response': f"I couldn't find the Yahoo equivalent for {stock_name}."})

    # Process as a general question
    response = get_response(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True, port=1000)

