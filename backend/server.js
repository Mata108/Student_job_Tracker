const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());  
app.use(express.json());

// Connect to MongoDB
mongoose.connect(`mongodb+srv://nikhilsahu78695:Nikhil123456@cluster0.6b9itae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
  

// Routes
const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
