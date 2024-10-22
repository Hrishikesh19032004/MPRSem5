import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

function useTypewriter(text, speed = 10) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [text, currentIndex, speed]);

  return displayedText;
}

function Message({ sender, text }) {
  const displayedText = useTypewriter(text, sender === 'Bot' ? 20 : 0);

  return (
    <p>
      <strong>{sender}:</strong> {displayedText}
    </p>
  );
}

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatOutputRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user's message to chat
    setMessages((prevMessages) => [...prevMessages, { sender: 'User', text: input }]);
    setInput('');

    try {
      const response = await fetch('http://127.0.0.1:1000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', text: data.response }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', text: "Sorry, I couldn't get a response from the server." }]);
    }
  };

  const clearChat = (e) => {
    e.preventDefault();
    setMessages([]);
  };

  useEffect(() => {
    if (chatOutputRef.current) {
      chatOutputRef.current.scrollTop = chatOutputRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbox">
      <h1>Stock Market Chatbot</h1>
      <div className="chatOutput" ref={chatOutputRef}>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Ask a stock market question..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <div className="chatBtnContainer">
        <button onClick={handleSend}>Send</button>
        <button className="clearChatBtn" onClick={clearChat}>Clear Chat</button>
      </div>
    </div>
  );
}

export default Chatbot;
