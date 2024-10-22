import React from 'react';
import stockImage from '../Images/Stock.png'; 
import "../Styles/HeroSection.css"
const HeroSection = () => {
    return (
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p className="hero-subtitle" style={{fontSize:"2rem",fontWeight:"100"}}>Master the Markets</p>
                        <h1 style={{fontSize:"5.5rem",fontWeight:"100"}}>Welcome to StockEd TSEC</h1>
                        <p style={{fontSize:"2rem",fontWeight:"100"}}>
                            Elevate your investment strategies with our comprehensive stock learning platform. 
                            Whether you're a beginner or an experienced trader, our tailored courses and 
                            resources will help you make informed decisions and achieve your financial goals.
                        </p>
                        <div className="btn-group">
                            <a href="/courses">
                                <button className="btn primary-btn" style={{backgroundColor:"#dc2f02",color:"black",marginBottom:'3rem',width:'18rem'}}>
                                    Explore Courses
                                </button>
                            </a>
                            <a href="/contact">
                                <button className="btn secondary-btn" style={{borderColor:"#dc2f02",color:"#dc2f02",width:'18rem'}}>
                                    Get in Touch
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="hero-images">
                        <img src={stockImage} width="600px" height="500px" alt="Stock market analysis" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeroSection;
