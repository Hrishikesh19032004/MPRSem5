import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import coursesData from "../Data/courses.json";
import "../Styles/CourseDetails.css";
import BgImage from "../Images/CourseDetailsBG.jpg";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseDetails = () => {
  const { id } = useParams();
  const { courseName }=useParams()
  const { user } = useAuth(); 
  const course = coursesData.courses.find(
    (course) => course.id === parseInt(id)
  );

  if (!course) {
    return <div>Error: Course not found</div>;
  }

  const handleEnroll = async () => {
    if (!user) {
      toast.error("Please log in to enroll in this course.");
      return;
    }

    console.log(course.courseName)
  
    const enrollmentData = {
      courseId: course.id,
      courseNameStock:course.courseName,
      username: user.username,
      userId: user.id || "67164af77d9ad50e02dcd195",  
    };
    // console.log(`${course.courseName}1`)
    console.log("Enrollment Data:", enrollmentData);
    
    try {
      const response = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollmentData),
      });
  
      if (response.ok) {
        toast.success("Enrollment successful!");
      } else {
        toast.error("Enrollment failed. Please try again.");
        console.error("Enrollment failed:", response.statusText);
      }
    } catch (error) {
      toast.error("Error enrolling in course. Please try again.");
      console.error("Error enrolling in course:", error);
    }
  };

  useEffect(() => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const currentlyActiveHeader = document.querySelector(
          ".accordion-header.active"
        );
        if (currentlyActiveHeader && currentlyActiveHeader !== header) {
          currentlyActiveHeader.classList.remove("active");
          currentlyActiveHeader.nextElementSibling.style.display = "none";
        }

        header.classList.toggle("active");
        const content = header.nextElementSibling;
        if (header.classList.contains("active")) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });

    return () => {
      headers.forEach((header) => {
        header.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="course-details-container">
      <ToastContainer /> {/* Add ToastContainer here to render toast notifications */}
      <div className="course-header">
        <img src={BgImage} alt={course.courseName} className="course-image" />
        <h1 className="course-title" style={{ fontSize: "5.5rem", fontWeight: "100" }}>
          {course.courseName}
        </h1>
        <p className="course-rating" style={{ fontSize: "2rem", fontWeight: "100" }}>
          Rating: {course.rating} ★
        </p>
        <p className="course-description" style={{ fontSize: "2rem", fontWeight: "100" }}>
          {course.description}
        </p>
        <div className="course-details-summary">
          <h3 style={{ fontSize: "3rem", fontWeight: "100" }}>
            {`Learn ${course.courseName} within a Month`}
          </h3>
          <p style={{ fontSize: "1.7rem", fontWeight: "100" }}>
            {`Master the fundamentals of ${course.courseName} with our hands-on course.`}
          </p>
          <p style={{ fontSize: "1.7rem", fontWeight: "100" }}>
            {`Gain practical knowledge of market analysis through our online tutorials. Prepare for a future in ${course.courseName}.`}
          </p>
          <p style={{ fontSize: "2rem", fontWeight: "100" }}>
            (25263 reviews) | 10 lessons | Beginner level | 148.3k Learners
          </p>
        </div>

        <button onClick={handleEnroll} className="enroll" style={{ marginRight: "10px", width: '18rem' }}>
          Enroll Now
        </button>
        <NavLink to="/courses" className="back-button">
          Back to Courses
        </NavLink>
      </div>

      <div className="course-overview">
        <h2 style={{ fontSize: "5.5rem", fontWeight: "100" }}>
          Course Overview
        </h2>
        <p>{course.overview}</p>
      </div>

      <div className="accordion">
        {course.subtopics.map((subtopic, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" style={{ fontSize: "2rem", fontWeight: "100" }}>
              {subtopic.name}
              <span className="accordion-icon" style={{ marginLeft: "6px" }}>
                ▼
              </span>
            </button>
            <div className="accordion-content">
              <p style={{ fontSize: "2rem", fontWeight: "100" }}>{subtopic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
