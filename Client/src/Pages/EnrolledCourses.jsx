import React, { useState, useEffect } from 'react';
import '../Styles/EnrolledCourses.css';

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Hardcoded user ID
  const userId = "67164af77d9ad50e02dcd195";

  const getEnrolledCourses = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/enroll/${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Enrolled Courses:", data.enrollments);
      setEnrolledCourses(data.enrollments); 
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  useEffect(() => {
    getEnrolledCourses();  
  }, []); 

  if (enrolledCourses.length === 0) {
    return (
      <h1 className="no-courses">
        No courses enrolled.
      </h1>
    );
  }

  return (
    <div className="enrolled-courses-container">
      <h2 className="heading">Your Enrolled Courses</h2>
      <ul className="course-list">
        {enrolledCourses.map((course) => (
          <div key={course._id} className="course-item">
            <div className="course-info">
              <div className="course-labels">
                <p>Course Id:</p>
                <p>Course Name:</p>
              </div>
              <div className="course-values">
                <li>{course.courseId}</li>
                <li>{course.courseNameStock}</li>
              </div>
            </div>
            <hr className="course-divider" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EnrolledCourses;
