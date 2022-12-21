const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user');

//middleware
app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
//connect to db
const port = 3003 || process.env.PORT;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => console.log(`connected to db and Server started on port ${port}`))
    })
    .catch((e) => console.log(e, "error connecting to db!.."));
//routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);