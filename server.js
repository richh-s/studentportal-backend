const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Ensure environment variables are loaded at the start

const app = express();
const mongoose = require("mongoose");

// Correct use of environment variables for PORT and MongoDB connection string
const PORT = process.env.PORT || 8000;

// Connect to MongoDB using Mongoose without deprecated options
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB successfully.'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Configure CORS to allow requests from the React application's origin
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your React application's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Assuming these routes are properly defined in the '/router' directory
app.use("/teacher", require("./router/teacher.router"));
app.use("/admin", require("./router/admin.router"));
app.use("/student", require("./router/student.router"));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
