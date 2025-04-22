const express = require('express');
const app = express();
const doenv = require('dotenv');
doenv.config();
const cors = require('cors');
app.use(cors());
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
connectDB();

app.use('/user', userRoutes);
app.use('/captain', captainRoutes);
app.use('/maps', mapsRoutes);


app.get('/', (req, res) => {
    res.send("Hello World");
});

module.exports = app;