// server/models/Enrollment.js
const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  courseNameStock:{type:String,required:true},
  username: { type: String, required: true },
  userId: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Enrollment", enrollmentSchema);
