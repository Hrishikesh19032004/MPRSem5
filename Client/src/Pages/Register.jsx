import React, { useState } from 'react';
import registrationImage from '../Images/registration.png';
import "../Styles/Register.css";
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth';
import {toast} from "react-toastify";
const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    
const navigate = useNavigate();
const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          const responseData = await response.json();

          console.log("response data : ", responseData.extraDetails);

          if (response.ok) {
            storeTokenInLS(responseData.token)
            toast.success("Registration Successful");
            
            setUser({ username: "", email: "", phone: "", password: "" });
            navigate("/")
          } else {
            toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
          }
        } catch (error) {
          console.error("Error", error);
        }

    }
    return (
        <section className="registration-page">
            <main>
                <div className="section-Registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-img">
                            <img src={registrationImage} width="600" height="500" alt="Registration" />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading">Registration Form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="Enter your username" 
                                        id="username" 
                                        autoComplete="off" 
                                        value={user.username} 
                                        onChange={handleInput} 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Enter your email" 
                                        id="email" 
                                        autoComplete="off" 
                                        value={user.email} 
                                        onChange={handleInput} 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                        type="number" 
                                        name="phone" 
                                        placeholder="Enter your phone number" 
                                        id="phone" 
                                        autoComplete="off" 
                                        value={user.phone} 
                                        onChange={handleInput} 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Enter your password" 
                                        id="password" 
                                        autoComplete="off" 
                                        value={user.password} 
                                        onChange={handleInput} 
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
    
};

export default Register;
