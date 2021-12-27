const express = require('express');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(fileUpload());
// // Connect Database
connectDB();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// // Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('public'));

// // Define Route
app.use('/api/form', require('./routes/form'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
