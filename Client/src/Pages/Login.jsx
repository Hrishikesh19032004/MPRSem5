import { useState } from "react";
import registrationImage from "../Images/registration.png";
import "../Styles/Login.css"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from "react-toastify";
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const navigate  = useNavigate();
      const {storeTokenInLS} = useAuth();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;  

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          const res_data = await response.json();
          console.log("response data : ", res_data);
          if (response.ok) {
            
            toast.success("Login Successful");

            storeTokenInLS(res_data.token);
            setUser({ username: "", email: "", phone: "", password: "" });
            navigate("/")
            
          } else {
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);

          }
        } catch (error) {
          console.error("Error", error);
        }
      }
            
    return (
        <section className="login-page">
            <main>
                <div className="section-Login">
                    <div className="container grid grid-two-cols">
                        <div className="login-img">
                            <img src={registrationImage} width="600" height="500" alt="Login" />
                        </div>

                        <div className="login-form">
                            <h1 className="main-heading">Login Form</h1>
                            <br />

                            <form action="" onSubmit={handleSubmit}>
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

                                <button type="submit" className="btn btn-submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Login;
