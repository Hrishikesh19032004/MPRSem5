import React from 'react';
import "../Styles/About.css";
import member1 from '../Images/Mem1.png'; 
import member2 from '../Images/Mem2.png';
import member3 from '../Images/Mem3.png';
import member4 from '../Images/Mem3.png';

const About = () => {
    return (
        <div className="about-page">
            <section className="intro">
                <h1>WHO WE ARE</h1>
                <p>Technical Analysis workshops for the self-directed trader and investor who wants an edge in the financial markets with the implementation of a proven workable trading plan.</p>
            </section>

            <section className="flip-cards">
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h2>LIVE MARKET TRADING</h2>
                            <p>We have seen great successes with everyone's companies.</p>
                        </div>
                        <div className="card-back">
                            <p>Explore our live market trading sessions and witness how we make real-time decisions for optimal trading results.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h2>MUTUAL FUNDS</h2>
                            <p>It's all about how you use your money and putting it where we can achieve superior returns.</p>
                        </div>
                        <div className="card-back">
                            <p>We design, plan, and execute mutual fund strategies to help you achieve superior returns on your investments.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h2>INSURANCE</h2>
                            <p>You don't need to pray to God when there is a storm in the sky cuz insurance will take care of all unknown risks.</p>
                        </div>
                        <div className="card-back">
                            <p>We provide the best insurance advice to minimize your risk and protect your future.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h2>BROKING</h2>
                            <p>Meet your stock broker here. Our motto is, "Open your broking account with us today, secure your tomorrow."</p>
                        </div>
                        <div className="card-back">
                            <p>Our aim is to provide financial freedom through expert broking services. Start your journey with us today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-members">
                <h2 style={{fontSize:"5rem",fontWeight:"100"}}>Meet the Team</h2>
                <div className="member-card">
                    <img src={member1} alt="Hrishikesh Dhuri" />
                    <div className="member-info">
                        <h3 style={{fontSize:"3rem",fontWeight:"100"}}>Hrishikesh Dhuri</h3>
                        <p style={{fontSize:"1.6rem",fontWeight:"100"}}>Lead Developer with a passion for crafting innovative solutions and leading the technical team.</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/hrishikesh-dhuri" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/hrishikesh-dhuri" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <img src={member2} alt="Meet Kadam" />
                    <div className="member-info">
                        <h3 style={{fontSize:"3rem",fontWeight:"100"}}>Meet Kadam</h3>
                        <p style={{fontSize:"1.6rem",fontWeight:"100"}}>Front-End Specialist with expertise in creating engaging and responsive user interfaces.</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/meet-kadam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/meet-kadam" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <img src={member3} alt="Harsh Kadam" />
                    <div className="member-info">
                        <h3 style={{fontSize:"3rem",fontWeight:"100"}}>Harsh Kadam</h3>
                        <p style={{fontSize:"1.6rem",fontWeight:"100"}}>Backend Developer with a focus on server-side logic and database management.</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/harsh-kadam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/harsh-kadam" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <img src={member4} alt="Vineet Kadam" />
                    <div className="member-info">
                        <h3 style={{fontSize:"3rem",fontWeight:"100"}}>Vineet Kadam</h3>
                        <p style={{fontSize:"1.6rem",fontWeight:"100"}}>UX/UI Designer dedicated to creating intuitive and user-friendly interfaces.</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/vineet-kadam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/vineet-kadam" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-journey">
                <h2 style={{fontSize:"5.5rem",fontWeight:"100"}}>About Our Journey</h2>
                <p style={{fontSize:"2rem",fontWeight:"100"}}>Our journey began with a vision to empower traders and investors with the knowledge and tools needed to excel in the financial markets. We started small, with a passionate team dedicated to delivering high-quality educational content and practical trading strategies. Over the years, we’ve grown into a leading platform with a diverse range of courses and workshops, reaching thousands of traders and investors worldwide. Our commitment to excellence and innovation drives us to continually enhance our offerings and provide unparalleled support to our users. Join us on this exciting journey as we continue to shape the future of financial education.</p>
            </section>
        </div>
    );
};

export default About;
