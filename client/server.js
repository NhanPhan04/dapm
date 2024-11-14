const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./Data');  // Đảm bảo rằng connectToDatabase được import đúng
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRouter = require('./controllers/userController');
const app = express();

connectToDatabase()
  .then(() => console.log("Connected to database successfully"))
  .catch((error) => console.error("Error connecting to database:", error));

app.use(cookieParser());
app.use(express.json()); 
app.use(bodyParser.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));
app.use('/auth', authRouter);


app.get('/', (req, res) => {
  res.send('Welcome to  API');
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
