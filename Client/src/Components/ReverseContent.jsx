import React from 'react';
import stockImage from '../Images/Investor.png'; 
import '../Styles/ReverseContent.css'; 

const ReverseContent = () => {
    return (
        <section className="section-reverse" style={{marginTop:"-10rem"}}>
            <div className="container grid grid-two-cols-reverse">
                
                <div className="image">
                    <img src={stockImage} alt="Financial Mentorship" />
                </div>

                <div className="content">
                    <p className="subtitle" style={{fontSize:"2rem",fontWeight:"100"}}>REAL NUMBERS</p>
                    <h1 style={{fontSize:"5.5rem",fontWeight:"100"}}>Expect Great Things from <br />Your Financial Mentor</h1>
                    <p style={{fontSize:"2rem",fontWeight:"100"}}>
                        We know how important customer experience is for a business and therefore, 
                        we strive to make your company excel in this.
                    </p>
                    <div className="stats">
                        <div className="stat-item">
                            <p className="stat-number">5000+</p>
                            <p className="stat-text" style={{fontSize:"2rem",fontWeight:"100"}}>Active Clients</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-number">15000+</p>
                            <p className="stat-text" style={{fontSize:"2rem",fontWeight:"100"}}>Trained Students</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-number" >500+</p>
                            <p className="stat-text" style={{fontSize:"2rem",fontWeight:"100"}}>Seminars Done</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-number">15+</p>
                            <p className="stat-text" style={{fontSize:"2rem",fontWeight:"100"}}>Glorious Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReverseContent;
