const express = require("express");
const router = express.Router();
const Enrollment = require("../models/enrollment-model"); // Ensure this path is correct

// POST route for enrolling in a course
router.post("/", async (req, res) => {
  const { courseId,courseNameStock, username, userId } = req.body;

  if (!courseId || !username || !userId) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const enrollment = new Enrollment({
      courseId,
      courseNameStock,
      username,
      userId,
    });

    await enrollment.save();
    return res.status(201).json({ message: "Enrollment successful!", enrollment });
  } catch (error) {
    console.error("Error enrolling in course:", error);
    return res.status(500).json({ message: "Enrollment failed." });
  }
});

// GET route for fetching enrollments by userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const enrollments = await Enrollment.find({ userId }); // Fetching enrollments by userId

    if (!enrollments || enrollments.length === 0) {
      return res.status(404).json({ message: "No enrollments found for this user." });
    }

    return res.status(200).json({ enrollments });
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return res.status(500).json({ message: "Error fetching enrollments." });
  }
});



module.exports = router;
