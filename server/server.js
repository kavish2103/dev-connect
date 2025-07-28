import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // to parse incoming JSON data

// Route
app.get('/', (req, res) => {
  res.send('DevConnect API is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
