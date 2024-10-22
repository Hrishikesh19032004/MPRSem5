const Enrollment = require("../models/enrollment-model");

const enrollCourse = async (req, res) => {
  try {
    const { courseId, courseNameStock, username, userId } = req.body;
    const enrollment = await Enrollment.create({ courseId, courseNameStock, username, userId });
    return res.status(200).json({ message: "Enrollment successful", enrollment });
  } catch (error) {
    console.error("Error during enrollment:", error);
    return res.status(500).json({ message: "Enrollment failed" });
  }
};


const getEnrolledCourses = async () => {
  if (!userId) {
    console.error("User ID is not available.");
    return;
  }

  try {
    const response = await fetch(`/api/enrolls/67164af77d9ad50e02dcd195`); 
    console.log("Response status:", response.status); // Check status
    if (!response.ok) {
      const errorText = await response.text(); // Get error response text
      console.error("Network response was not ok:", errorText);
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Enrolled Courses:", data.enrollments);
    setEnrolledCourses(data.enrollments);
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
  }
};


module.exports = { enrollCourse, getEnrollments };
