const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose")
const userRoutes = require('./routes/userRoutes.js')
const hotelRoutes = require("./routes/hotelRoutes")
const uploadRoutes = require("./routes/uploadRoutes")
const { errorHandler, notFound } = require('./utils/errorUtil');
const path = require("path");

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/users', userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use('/api/upload', uploadRoutes);
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/images', express.static(path.join(__dirname, '/images')));

app.get('/', (req, res) => {
  res.send('API is running');
});


app.use(notFound);

app.use(errorHandler);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on Port:${PORT}`));