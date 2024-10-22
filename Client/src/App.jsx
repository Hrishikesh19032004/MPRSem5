import NavbarComponent from "./Components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import { Error } from "./Pages/Error";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails"; 
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import Login from "./Pages/Login";
import { Market } from "./Pages/Market";
import Register from "./Pages/Register";
import "./index.css"; 
import "./App.css"; 
import Footer from "./Components/Footer";

import AdminLayout from './Components/layouts/Admin-Layout'
import {AdminUsers} from './Pages/Admin-Users'
import {AdminContacts} from './Pages/Admin-Conacts'
import { AdminUpdate } from './Pages/Admin-Update'
import { Logout } from './Pages/Logout'
import Profile from "./Components/profile";
import Dashboard from "./Pages/Dashboard";
import EnrolledCourses from "./Pages/EnrolledCourses";
import Stocks from "./Pages/Stocks";
import Portfolio from "./Pages/portfolio";
import Chatbot from "./Chatbot/Chatbot";
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News key="business" country="in" category="business"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/market" element={<Market />} />
        <Route path="/register" element={<Register />} />
        <Route path='/logout' element={<Logout/>} />
        <Route path="*" element={<Error />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/PersonalFinance" element={<Dashboard/>}/>
        <Route path="/Stocks" element={<Stocks/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/enrolled-courses" element={<EnrolledCourses />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path='users' element={<AdminUsers/>}/>
          <Route path='contacts' element={<AdminContacts/>}/>
          <Route path="users/:id/edit" element={<AdminUpdate />} />

        </Route>



   
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
