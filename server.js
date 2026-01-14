require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./controllers/auth');


const app = express();
const hootsRouter = require("./controllers/hoots.js");
// Middleware
app.use(express.json());

// Database
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

// Routes
app.use('/auth', authRouter);
app.use("/hoots", hootsRouter);
// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
