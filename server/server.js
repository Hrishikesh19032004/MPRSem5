require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const enrollmentRoute = require("./router/enrollment-router"); // Import the enrollment router

const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // Ensure this is here

app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use("/api/enroll", enrollmentRoute); // Use the enrollment router

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});




